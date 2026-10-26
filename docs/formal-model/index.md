---
sidebar_position: 1
---

# PIC Formal Model

The **Provenance Identity Continuity (PIC) Model** was originally developed by
**Nicola Gallo** as a formal framework for causal authority propagation across
distributed execution. The research record spans five dated publications.
Three complementary proof artifacts accompany that record: Lean proves the
abstract mathematics, Tamarin checks stateful message-level safety, and
ProVerif gives an independent symbolic check of the authentication core.

## Historical references

| Date | Work | Author | Role in the research record | Reference |
| --- | --- | --- | --- | --- |
| 1 December 2025 | PIC Model — Provenance Identity Continuity for Distributed Execution Systems | Nicola Gallo | Initial public PIC Model working paper; archived for historical reference and not an implementation specification. | [DOI 10.5281/zenodo.17777421](https://doi.org/10.5281/zenodo.17777421) |
| 5 December 2025 | Authority Propagation Models: PoP vs PoC and the Confused Deputy Problem | Nicola Gallo | Analysis of the transition from possession-based reasoning to continuity-based authority propagation. | [DOI 10.5281/zenodo.17833000](https://doi.org/10.5281/zenodo.17833000) |
| 9 July 2026 | Proof-of-Continuity: A Temporal Model for Authority Propagation in Distributed Systems and AI Agents | Nicola Gallo | Formal temporal foundation of Proof of Relationship, Proof of Continuity, and authority non-expansion. | [arXiv:2607.08906](https://arxiv.org/abs/2607.08906) |
| 25 September 2026 | Beyond Proof of Possession: A Relational Theory of Authority | Nicola Gallo | Relational authority theory separating possession from authority admissibility and defining relational attenuation. | [DOI 10.5281/zenodo.23102206](https://doi.org/10.5281/zenodo.23102206) |
| 2 October 2026 | Full Provenance on the COSS Causal Axis: An Event-Level Closure of Causal Attribution and Confused-Deputy Exclusion | Nicola Gallo | Event-level causal closure, conservative joins, and confused-deputy exclusion across PIC and COSS. | [DOI 10.5281/zenodo.23102373](https://doi.org/10.5281/zenodo.23102373) |

## Proof artifacts

| Artifact | Author | Description | Reference |
| --- | --- | --- | --- |
| PIC Lean Formal Proof | Nicola Gallo | Machine-checked Lean 4 formalization of the paper's definitions and theorems. | [overview](./lean-formal-proof.md) / [source](https://github.com/ngallo/pic-model/tree/main/draft/0.1/pic-model-math/pic-lean) |
| PIC ProVerif Symbolic Proof | Nicola Gallo | Symbolic verification of PoR eligibility, key control, and non-vacuity for the message-level protocol core. | [overview](./proverif-symbolic-proof.md) / [source](https://github.com/ngallo/pic-model/tree/main/draft/0.1/pic-model-math/pic-proverif) |
| PIC Tamarin Symbolic Proof | Nicola Gallo | Symbolic trace proof of origin-bound authority, irreversible branch-local drop, PoR eligibility, and key control. | [overview](./tamarin-symbolic-proof.md) / [source](https://github.com/ngallo/pic-model/tree/main/draft/0.1/pic-model-math/pic-tamarin) |

## How to read the proofs together

| Question | Proof artifact |
| --- | --- |
| Is the model mathematically consistent and origin-bounded for arbitrary finite chains? | Lean |
| Does the symbolic protocol preserve safety across traces, public tokens, branching, and compromised workload keys? | Tamarin |
| Does accepted advancement require trusted PoR evidence and workload key control? | ProVerif |
