/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface LlamaInvocation {
  nThreads: number
  nTokPredict: number
  topK: number
  topP?: number
  tfsZ?: number
  temp?: number
  typicalP?: number
  repeatPenalty?: number
  repeatLastN?: number
  frequencyPenalty?: number
  presencePenalty?: number
  stopSequence?: string
  penalizeNl?: boolean
  prompt: string
}
export interface LlamaContextParams {
  nCtx: number
  nParts: number
  seed: number
  f16Kv: boolean
  logitsAll: boolean
  vocabOnly: boolean
  useMlock: boolean
  embedding: boolean
  useMmap: boolean
}
export const enum TokenizeResultType {
  Error = 'Error',
  Data = 'Data'
}
export interface TokenizeResult {
  type: TokenizeResultType
  data: Array<number>
}
export interface InferenceToken {
  token: string
  completed: boolean
}
export const enum InferenceResultType {
  Error = 'Error',
  Data = 'Data',
  End = 'End'
}
export interface InferenceResult {
  type: InferenceResultType
  data?: InferenceToken
  message?: string
}
export const enum EmbeddingResultType {
  Error = 'Error',
  Data = 'Data'
}
export interface EmbeddingResult {
  type: EmbeddingResultType
  data: Array<number>
}
export class LLama {
  static load(path: string, params: LlamaContextParams | undefined | null, enableLogger: boolean): LLama
  getWordEmbedding(input: LlamaInvocation, callback: (result: EmbeddingResult) => void): void
  tokenize(params: string, nCtx: number, callback: (result: TokenizeResult) => void): void
  inference(input: LlamaInvocation, callback: (result: InferenceResult) => void): void
}
