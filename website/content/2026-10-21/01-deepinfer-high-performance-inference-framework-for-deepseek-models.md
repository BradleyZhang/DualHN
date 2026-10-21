---
title: "DeepInfer：面向 DeepSeek 模型的高性能推理框架"
date: 2026-10-21T07:53:19+08:00
draft: false
source: "Hacker News"
originalTitle: "deepseek-ai/DeepInfer: DeepInfer: High-performance, large-scale inference framework for DeepSeek models"
originalUrl: "https://github.com/deepseek-ai/DeepInfer"
hnUrl: ""
points: 
comments: 
---

> ## DeepInfer

深度推理

> DeepInfer is the high-performance inference framework that powers DeepSeek's large-scale production services. This open-source release provides offline inference with the core features needed for serving at scale.

DeepInfer 是支撑 DeepSeek 大规模生产服务的高性能推理框架。此次开源发布提供离线推理，具备大规模服务所需的核心功能。

> Supported models:

支持的模型：

> - DeepSeek-V4.1-Flash

DeepSeek-V4.1-Flash

> Supported features:

支持的功能：

> - Optimized kernels, model and sampler runtime
> - Parallelism: Attention DP / balanced CP, MoE EP + EPLB
> - DSpark and confidence-scheduled verification
> - SWA bounded replay
> - Asynchronous scheduling (zero-overhead batch scheduler)
> - Batch-invariant inference
> - Deterministic sampling
> - Structured outputs
> Feature details and configuration
> - **Optimized kernels:** [FlashMLA](https://github.com/deepseek-ai/FlashMLA), [DeepGEMM](https://github.com/deepseek-ai/DeepGEMM), [DeepEP](https://github.com/deepseek-ai/DeepEP), [TileKernels](https://github.com/deepseek-ai/TileKernels), [DeepSelect](https://github.com/deepseek-ai/DeepSelect), and custom [TileLang kernels](https://github.com/deepseek-ai/DeepInfer/blob/main/deepinfer/model_executor/layers/tilelang_ops).
> - **DSpark and confidence-scheduled verification:** accelerate decoding with draft tokens and use confidence estimates to schedule verification. Set `DEEPINFER_ENABLE_MTP_VARLEN=1`; `DEEPINFER_USE_NEXTN_DECODE` controls the maximum draft length (default: 5).
> - **Decoder SWA bounded replay:** reduce decoder prefill work by replaying only a bounded suffix. Set `DEEPINFER_YOCO_PREFILL_TRUNCATION_MODE=compact` and `DEEPINFER_YOCO_PREFILL_KEEP_TOKENS=140` for the default V4.1 settings; the retained suffix must cover the SWA window plus the maximum backtracking length.
> - **Asynchronous scheduling:** overlap CPU batch scheduling with device execution. Enabled by default.
> - **Batch-invariant inference:** keep model results identical across different batch compositions. Enable with `DEEPINFER_BATCH_INVARIANT=1` (NVIDIA only).
> - **Deterministic sampling:** produce identical outputs for identical input tokens and sampling parameters. Set `DEEPINFER_BATCH_INVARIANT=1 DEEPINFER_ENABLE_MTP_VARLEN=0` and pass a fixed `seq_seed` to `SamplingParams` (NVIDIA only).
> - **Structured outputs:** constrain generation to a regex, JSON schema, or EBNF grammar. Pass `so_args={"schema_type": ..., "schema": ...}` to `SamplingParams`; see [examples](https://github.com/deepseek-ai/DeepInfer/blob/main/examples/_structured_output.py).

- 优化 kernels, model 与 sampler runtime
- 平行: Attention DP / balanced CP, MoE EP + EPLB
- DSpark 与 confidence-scheduled verification
- SWA bounded replay
- 异步调度 (零开销批处理器): 重叠 CPU 批处理与设备执行。默认启用。
- 批量不变推理: 保持模型结果在不同 batch compositions 中保持相同。Enable with `DEEPINFER_BATCH_INVARIANT=1` (NVIDIA only).
- 确定性采样: 为相同的输入 tokens 和采样参数产生相同输出。Set `DEEPINFER_BATCH_INVARIANT=1 DEEPINFER_ENABLE_MTP_VARLEN=0` and pass a fixed `seq_seed` to `SamplingParams` (NVIDIA only).
- 结构化输出: 将生成限制为 regex、JSON schema 或 EBNF 语法。Pass `so_args={"schema_type": ..., "schema": ...}` to `SamplingParams`; see [examples](https://github.com/deepseek-ai/DeepInfer/blob/main/examples/_structured_output.py).
Feature details and configuration
- **Optimized kernels:** [FlashMLA](https://github.com/deepseek-ai/FlashMLA), [DeepGEMM](https://github.com/deepseek-ai/DeepGEMM), [DeepEP](https://github.com/deepseek-ai/DeepEP), [TileKernels](https://github.com/deepseek-ai/TileKernels), [DeepSelect](https://github.com/deepseek-ai/DeepSelect), and 自定义 [TileLang kernels](https://github.com/deepseek-ai/DeepInfer/blob/main/deepinfer/model_executor/layers/tilelang_ops).
- **DSpark and confidence-scheduled verification:** 加速解码时使用 draft tokens 并使用 confidence estimates 进行调度验证。Set `DEEPINFER_ENABLE_MTP_VARLEN=1`; `DEEPINFER_USE_NEXTN_DECODE` controls the maximum draft length (default: 5).
- **Decoder SWA bounded replay:** 减少解码预填工作，仅重放有限 suffix。Set `DEEPINFER_YOCO_PREFILL_TRUNCATION_MODE=compact` and `DEEPINFER_YOCO_PREFILL_KEEP_TOKENS=140` for the default V4.1 settings; the retained suffix must cover the SWA window plus the maximum backtracking length.
- **Asynchronous scheduling:** 重叠 CPU 批处理与设备执行。默认启用。
- **Batch-invariant inference:** 保持模型结果在不同 batch compositions 中保持相同。Enable with `DEEPINFER_BATCH_INVARIANT=1` (NVIDIA only).
- **Deterministic sampling:** 为相同的输入 tokens 和采样参数产生相同输出。Set `DEEPINFER_BATCH_INVARIANT=1 DEEPINFER_ENABLE_MTP_VARLEN=0` and pass a fixed `seq_seed` to `SamplingParams` (NVIDIA only).
- **Structured outputs:** 将生成限制为 regex、JSON schema 或 EBNF 语法。Pass `so_args={"schema_type": ..., "schema": ...}` to `SamplingParams`; see [examples](https://github.com/deepseek-ai/DeepInfer/blob/main/examples/_structured_output.py).

> Supported hardware:

支持的硬件：

> - NVIDIA SM100 GPUs
> - Huawei Ascend 950 NPUs

- NVIDIA SM100 图形处理单元
- 华为昇腾 950 神经网络处理单元

> Required for a complete inference service (not included in this release):

完整的推理服务所需组件（本版本不包含）：

> - A KV cache system
> - VE/Prefill/Decode disaggregation (most required engine functionality is already implemented)
> - Load balancing across data-parallel replicas for both prefill and decode

- 一个 KV cache 系统
- VE/Prefill/Decode 解耦（大部分所需引擎功能已实现）
- 跨数据并行副本的负载均衡，适用于 Prefill 和 Decode

> ## Getting started

## 快速入门

> ### Prerequisites

### 前置条件

> - Linux
> - GCC >= 13.0
> - Python 3.12
> - CUDA 13 (NVIDIA only)
> - CANN 9.2 (Ascend only)



- Linux
- GCC >= 13.0
- Python 3.12
- CUDA 13 (仅限 NVIDIA)
- CANN 9.2 (仅限 Ascend)

> ### Build from source

### 从源代码构建

> Before building DeepInfer, please create and activate an empty Python 3.12 environment.

在构建 DeepInfer 之前，请创建并激活一个空的 Python 3.12 环境。

```
# Use `ascend` instead for the Ascend platform
# Keep it exported in the environment where you run DeepInfer
export DEEPINFER_ACCELERATOR=nvidia
./build.sh
```

> ### Offline inference

### 离线推理

> The default checkpoint, [`deepseek-ai/DeepSeek-V4.1-Flash-1017`](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017), is downloaded into the Hugging Face cache on the first run; set `DEEPINFER_HF_MODEL_DIR=/path/to/DeepSeek-V4.1-Flash-1017` to run from a local copy instead.

默认检查点 [`deepseek-ai/DeepSeek-V4.1-Flash-1017`](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) 会在首次运行时下载到 Hugging Face 缓存中；如需改用本地副本，请设置 `DEEPINFER_HF_MODEL_DIR=/path/to/DeepSeek-V4.1-Flash-1017`。

```
python examples/offline_inference.py
```

> See [examples](https://github.com/deepseek-ai/DeepInfer/blob/main/examples/README.md) for details.

参见 [示例](https://github.com/deepseek-ai/DeepInfer/blob/main/examples/README.md) 了解详情。

> ## Performance benchmarks

## 性能基准测试

> | Prefill | Decode |
> | --- | --- |
> | [![Prefill: non-cached input throughput vs. latency](https://github.com/deepseek-ai/DeepInfer/raw/main/doc/images/prefill_pareto.png)](https://github.com/deepseek-ai/DeepInfer/blob/main/doc/images/prefill_pareto.png) | [![Decode: output throughput vs. per-user speed](https://github.com/deepseek-ai/DeepInfer/raw/main/doc/images/decode_pareto.png)](https://github.com/deepseek-ai/DeepInfer/blob/main/doc/images/decode_pareto.png) |



| Prefill（预填充） | Decode（解码） |
| --- | --- |
| [![Prefill：非缓存输入吞吐量与延迟](https://github.com/deepseek-ai/DeepInfer/raw/main/doc/images/prefill_pareto.png)](https://github.com/deepseek-ai/DeepInfer/blob/main/doc/images/prefill_pareto.png) | [![Decode：输出吞吐量与单用户速度](https://github.com/deepseek-ai/DeepInfer/raw/main/doc/images/decode_pareto.png)](https://github.com/deepseek-ai/DeepInfer/blob/main/doc/images/decode_pareto.png) |

> Measured on 4 SM100 GPUs for prefill and 64 for decode — each within one scale-up domain. To reproduce the benchmarks, see [run\_sweep.sh](https://github.com/deepseek-ai/DeepInfer/blob/main/examples/sweep/run_sweep.sh).

在4个SM100 GPU上进行预填充（prefill），在64个GPU上进行解码（decode）——每个都在一个规模扩展领域内。要重现基准测试，请参见 [run_sweep.sh](https://github.com/deepseek-ai/DeepInfer/blob/main/examples/sweep/run_sweep.sh)。

> ## Evaluation benchmarks



评估基准

> See [eval/README.md](https://github.com/deepseek-ai/DeepInfer/blob/main/eval/README.md).

请参阅 [eval/README.md](https://github.com/deepseek-ai/DeepInfer/blob/main/eval/README.md)。

> ## License

## 许可证

> DeepInfer is released under the Apache License 2.0. See [LICENSE](https://github.com/deepseek-ai/DeepInfer/blob/main/LICENSE) for details.

DeepInfer 基于 Apache License 2.0 许可证发布。详情请参见 [LICENSE](https://github.com/deepseek-ai/DeepInfer/blob/main/LICENSE)。

> ## Acknowledgments

## 致谢

> DeepInfer was originally built primarily on [vLLM](https://github.com/vllm-project/vllm), with additional inspiration from [SGLang](https://github.com/sgl-project/sglang) and [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM). We thank their developers.

DeepInfer 最初主要基于 [vLLM](https://github.com/vllm-project/vllm) 构建，并参考了 [SGLang](https://github.com/sgl-project/sglang) 和 [TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) 的设计思路。我们感谢这些项目的开发者。

> ## Citation



请提供完整的引用内容，以便我进行翻译。目前只看到了标题 "## Citation"，缺少具体的引用文本。

```
@misc{deepinfer2026,
  title = {DeepInfer: High-performance, large-scale inference framework for DeepSeek models},
   = {DeepSeek-AI},
  year = {2026},
  publisher = {GitHub},
  howpublished = {\url{https://github.com/deepseek-ai/DeepInfer}},
}
```
