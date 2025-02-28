<div align="center">

# LLaMA Node

llama-node: Node.js Library for Large Language Model

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/hlhr202/llama-node/llama-build.yml)
![NPM](https://img.shields.io/npm/l/llama-node)
[<img alt="npm" src="https://img.shields.io/npm/v/llama-node">](https://www.npmjs.com/package/llama-node)
![npm type definitions](https://img.shields.io/npm/types/llama-node)
[<img alt="twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Ftwitter.com%2Fhlhr202">](https://twitter.com/hlhr202)

  <h3><a href="https://llama-node.vercel.app/">Official Documentations</a></h3>

  <img src="./doc/assets/llama.png" width="300px" height="300px" alt="LLaMA generated by Stable diffusion"/>

<sub>Picture generated by stable diffusion.</sub>

</div>

---

- [LLaMA Node](#llama-node)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Manual compilation](#manual-compilation)
  - [Acknowledgments](#acknowledgments)
    - [Models/Inferencing tools dependencies](#modelsinferencing-tools-dependencies)
    - [Some source code comes from](#some-source-code-comes-from)

---

## Introduction

This project is in an early stage, the API for nodejs may change in the future, use it with caution.

This is a nodejs library for inferencing llama, rwkv or llama derived models. It was built on top of [llama-rs](https://github.com/rustformers/llama-rs), [llama.cpp](https://github.com/ggerganov/llama.cpp) and [rwkv.cpp](https://github.com/saharNooby/rwkv.cpp). It uses [napi-rs](https://github.com/napi-rs/napi-rs) for channel messages between node.js and llama thread.

Currently supported models (All of these should be converted to [GGML](https://github.com/ggerganov/ggml) format):

-   [LLaMA](https://github.com/facebookresearch/llama)
-   [RWKV](https://github.com/BlinkDL/RWKV-LM)
-   [Alpaca](https://github.com/ggerganov/llama.cpp#instruction-mode-with-alpaca)
-   [GPT4All](https://github.com/ggerganov/llama.cpp#using-gpt4all)
-   [Chinese LLaMA / Alpaca](https://github.com/ymcui/Chinese-LLaMA-Alpaca)
-   [Vigogne (French)](https://github.com/bofenghuang/vigogne)
-   [Vicuna](https://github.com/ggerganov/llama.cpp/discussions/643#discussioncomment-5533894)
-   [Koala](https://bair.berkeley.edu/blog/2023/04/03/koala/)

Supported platforms:

-   darwin-x64
-   darwin-arm64
-   linux-x64-gnu (glibc >= 2.31)
-   linux-x64-musl
-   win32-x64-msvc

Node.js version: >= 16

---

## Installation

-   Install llama-node npm package

```bash
npm install llama-node
```

-   Install anyone of the inference backends (at least one)

    -   llama.cpp

    ```bash
    npm install @llama-node/llama-cpp
    ```

    -   or llama-rs

    ```bash
    npm install @llama-node/core
    ```

    -   or rwkv.cpp

    ```bash
    npm install @llama-node/rwkv-cpp
    ```

---

## Manual compilation

Please see how to start with manual compilation on our [contribution guide](https://llama-node.vercel.app/contribution)

---

## Acknowledgments

This library was published under MIT/Apache-2.0 license. However, we strongly recommend you to cite our work/our dependencies work if you wish to reuse the code from this library.

### Models/Inferencing tools dependencies

-   LLaMA models: [facebookresearch/llama](https://github.com/facebookresearch/llama)
-   RWKV models: [BlinkDL/RWKV-LM](https://github.com/BlinkDL/RWKV-LM)
-   llama.cpp: [ggreganov/llama.cpp](https://github.com/ggerganov/llama.cpp)
-   llama-rs: [rustformers/llama-rs](https://github.com/rustformers/llama-rs)
-   rwkv.cpp: [saharNooby/rwkv.cpp](https://github.com/saharNooby/rwkv.cpp)

### Some source code comes from

-   llama-cpp bindings: [sobelio/llm-chain](https://github.com/sobelio/llm-chain)
-   rwkv logits sampling: [KerfuffleV2/smolrsrwkv](https://github.com/KerfuffleV2/smolrsrwkv)
