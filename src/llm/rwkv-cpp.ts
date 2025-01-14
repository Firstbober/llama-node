import {
    // EmbeddingResultType,
    InferenceResultType,
    Rwkv,
    RwkvInvocation,
    TokenizeResultType,
} from "@llama-node/rwkv-cpp";

import { type ILLM, type LLMResult, LLMError } from "./type";

export interface LoadConfig {
    modelPath: string;
    tokenizerPath: string;
    nThreads: number;
    enableLogging: boolean;
}

export interface TokenizeArguments {
    content: string;
}

export class RwkvCpp
    implements
        ILLM<Rwkv, LoadConfig, RwkvInvocation, unknown, TokenizeArguments>
{
    instance!: Rwkv;

    load(config: LoadConfig) {
        const { modelPath, tokenizerPath, nThreads, enableLogging } = config;
        this.instance = Rwkv.load(
            modelPath,
            tokenizerPath,
            nThreads,
            enableLogging
        );
    }

    async createCompletion(
        params: RwkvInvocation,
        callback: (data: { token: string; completed: boolean }) => void
    ): Promise<LLMResult> {
        let completed = false;
        const tokens: string[] = [];
        const errors: string[] = [];
        return new Promise<LLMResult>(
            (res, rej: (reason: LLMError) => void) => {
                this.instance.inference(params, (response) => {
                    switch (response.type) {
                        case InferenceResultType.Data: {
                            const data = {
                                token: response.data!.token,
                                completed: !!response.data!.completed,
                            };
                            tokens.push(data.token);
                            if (data.completed) {
                                completed = true;
                            }
                            callback(data);
                            break;
                        }
                        case InferenceResultType.End: {
                            if (errors.length) {
                                rej(
                                    new LLMError({
                                        message: errors.join("\n"),
                                        tokens,
                                        completed,
                                    })
                                );
                            } else {
                                res({ tokens, completed });
                            }
                            break;
                        }
                        case InferenceResultType.Error: {
                            errors.push(response.message ?? "Unknown Error");
                            break;
                        }
                    }
                });
            }
        );
    }

    // embedding not implemented yet

    /* async getEmbedding(params: RwkvInvocation): Promise<number[]> {
        return new Promise<number[]>((res, rej) => {
            this.instance.getWordEmbedding(params, (response) => {
                switch (response.type) {
                    case EmbeddingResultType.Data:
                        res(response.data ?? []);
                        break;
                    case EmbeddingResultType.Error:
                        rej(new Error("Unknown Error"));
                        break;
                }
            });
        });
    }

    async getDefaultEmbedding(text: string): Promise<number[]> {
        return this.getEmbedding({
            topP: 0.1,
            temp: 0.1,
            prompt: text,
            maxPredictLength: 2048,
        });
    } */

    async tokenize(params: TokenizeArguments): Promise<number[]> {
        return new Promise<number[]>((res, rej) => {
            this.instance.tokenize(params.content, (response) => {
                if (response.type === TokenizeResultType.Data) {
                    res(response.data);
                } else {
                    rej(new Error("Unknown Error"));
                }
            });
        });
    }
}
