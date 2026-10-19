---
sidebar_position: 1
---

# PIC Formal Model

The PIC Formal Model is supported by three papers and three complementary proof
artifacts. They are intentionally different: Lean proves the abstract
mathematics, Tamarin checks stateful message-level safety, and ProVerif gives
an independent symbolic check of the authentication core.

| Work | Author | Description | Reference |
| --- | --- | --- | --- |
| Proof-of-Continuity: A Temporal Model for Authority Propagation in Distributed Systems and AI Agents | Nicola Gallo | Formal foundation of the PIC Model: temporal model of authority propagation and confused deputy resolution. | [arxiv.org/abs/2607.08906](https://arxiv.org/abs/2607.08906) |
| Beyond Proof of Possession: A Relational Theory of Authority | Nicola Gallo | Relational extension of the PIC Model: separates possession from authority admissibility and adds relational attenuation to causal authorization. | [zenodo.org/records/23102206](https://zenodo.org/records/23102206) |
| Full Provenance on the COSS Causal Axis: An Event-Level Closure of Causal Attribution and Confused-Deputy Exclusion | Nicola Gallo | Event-level causal model proving ancestor-bounded authority, conservative joins, and confused-deputy exclusion across PIC and COSS. | [zenodo.org/records/23102373](https://zenodo.org/records/23102373) |
| PIC Lean Formal Proof | Nicola Gallo | Machine-checked Lean 4 formalization of the paper's definitions and theorems. | [overview](./lean-formal-proof.md) / [source](https://github.com/ngallo/pic-model/tree/main/draft/0.1/pic-model-math/pic-lean) |
| PIC ProVerif Symbolic Proof | Nicola Gallo | Symbolic verification of PoR eligibility, key control, and non-vacuity for the message-level protocol core. | [overview](./proverif-symbolic-proof.md) / [source](https://github.com/ngallo/pic-model/tree/main/draft/0.1/pic-model-math/pic-proverif) |
| PIC Tamarin Symbolic Proof | Nicola Gallo | Symbolic trace proof of origin-bound authority, irreversible branch-local drop, PoR eligibility, and key control. | [overview](./tamarin-symbolic-proof.md) / [source](https://github.com/ngallo/pic-model/tree/main/draft/0.1/pic-model-math/pic-tamarin) |

## How to read the proofs together

| Question | Proof artifact |
| --- | --- |
| Is the model mathematically consistent and origin-bounded for arbitrary finite chains? | Lean |
| Does the symbolic protocol preserve safety across traces, public tokens, branching, and compromised workload keys? | Tamarin |
| Does accepted advancement require trusted PoR evidence and workload key control? | ProVerif |
