/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface RwkvInvocation {
  maxPredictLength: number
  topP: number
  temp: number
  endToken?: number
  seed?: number
  prompt: string
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
export type RWKV = Rwkv
export class Rwkv {
  static load(modelPath: string, tokenizerPath: string, nThreads: number, enableLogger: boolean): Rwkv
  getWordEmbedding(input: RwkvInvocation, callback: (result: EmbeddingResult) => void): void
  tokenize(params: string, callback: (result: TokenizeResult) => void): void
  inference(input: RwkvInvocation, callback: (result: InferenceResult) => void): void
}
