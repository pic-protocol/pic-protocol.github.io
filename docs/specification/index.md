---
sidebar_position: 2
---

import {SpecificationIndexTables} from '@site/src/components/SpecificationIndexTables';

# PIC Specification

The **PIC Specification** defines the generic, implementation-independent
rules and invariants that underlie every **PIC-compliant protocol**. It is
**not a protocol itself**: it states what every conforming system must
guarantee, leaving wire formats, transports, cryptographic suites, and
deployment choices to the protocols built on top of it.

Version 0.2 is published as a **six-document set**: the PIC Specification
entry point plus Prover and Verifier, Revocation, Sandboxed Execution,
Architecture and Deployment, and Causally Ordered Security-State (COSS)
Evidence Record. Each document carries
its own status, license notice, authorship, historical record, references, and
publication history so that it remains intelligible when distributed
independently.

:::info Public drafts

These specifications are **open, actively developed public drafts**. They are
independently developed, have not been adopted by a standards-development
organization, and are not standards. RFC-style rendering is a familiar
publication format and does not confer standards status. Details may still
change between versions. See [status, license, and attribution](#status-license-and-attribution).

:::

<SpecificationIndexTables />

All releases are **drafts**: expect clarifications, additional normative
text, and structural adjustments driven by community feedback and
implementation experience from emerging **PIC-compliant protocols**.

## Origins, authorship, and historical record

The **Provenance Identity Continuity (PIC) Model** was originally developed by
**Nicola Gallo** as a formal framework for reasoning about causal authority
propagation across distributed execution. Its connected foundations include
Proof of Relationship (PoR), Proof of Continuity (PoC), authority
non-expansion, relational attenuation, and event-level causal provenance.

The PIC Model is distinct from the PIC Specifications, which translate its
formal results into technical requirements and are published and maintained by
**Nitro Agility S.r.l.** as **Specification Steward**.

The publicly verifiable research record is:

- **1 December 2025 — initial public PIC Model working paper.** Nicola Gallo,
  *PIC Model — Provenance Identity Continuity for Distributed Execution
  Systems*. Archived working paper. Zenodo.
  [DOI 10.5281/zenodo.17777421](https://doi.org/10.5281/zenodo.17777421).
- **5 December 2025 — authority-propagation analysis.** Nicola Gallo,
  *Authority Propagation Models: PoP vs PoC and the Confused Deputy Problem*.
  Zenodo. [DOI 10.5281/zenodo.17833000](https://doi.org/10.5281/zenodo.17833000).
- **9 July 2026 — formal Proof-of-Continuity paper.** Nicola Gallo,
  *Proof-of-Continuity: A Temporal Model for Authority Propagation in
  Distributed Systems and AI Agents*. arXiv:2607.08906.
  [arxiv.org/abs/2607.08906](https://arxiv.org/abs/2607.08906).
- **25 September 2026 — relational authority theory.** Nicola Gallo,
  *Beyond Proof of Possession: A Relational Theory of Authority*. Zenodo.
  [DOI 10.5281/zenodo.23102206](https://doi.org/10.5281/zenodo.23102206).
- **2 October 2026 — event-level causal closure.** Nicola Gallo,
  *Full Provenance on the COSS Causal Axis: An Event-Level Closure of Causal
  Attribution and Confused-Deputy Exclusion*. Zenodo.
  [DOI 10.5281/zenodo.23102373](https://doi.org/10.5281/zenodo.23102373).
- **10–13 November 2026 — IEEE NCA 2026 conference paper (forthcoming).**
  Nicola Gallo, Stefano Silvestri, and Antonio Radesca, *Authority Continuity
  for Verifiable Lineage in Distributed Systems and AI Agents*. Accepted for
  the 24th IEEE International Symposium on Network Computing and Applications
  (NCA 2026). [Official conference page](https://www.nca-ieee.org/2026/). The
  IEEE Xplore DOI will be added as soon as it becomes available.

The PIC Specification 0.2 family began public publication on **15 July 2026**
and was subsequently revised as the formal record developed. The same
standalone historical record is included in every current 0.2 specification.

### Visual references

These supplementary videos provide visual explanations of causal time,
same-history evidence, and full provenance in PIC and COSS. They are
informative and do not replace the formal publications or define conformance
requirements.

- **18 October 2026 — causal time in authorization.** Permguard,
  *[Encoding causal time in the authorization protocol · Same key, different
  history](https://www.youtube.com/watch?v=liYpy6QaBGo)*.
- **19 October 2026 — authority and information on one history.** Permguard,
  *[Temporal evidence: authority and information on one history · A single
  evidence](https://www.youtube.com/watch?v=cWoJiUnwHYg)*.
- **20 October 2026 — agentic loops and effect provenance.** Permguard,
  *[Agentic loops and full provenance: the evidence of every
  effect](https://www.youtube.com/watch?v=yceBw8TD6Ek)*.

## Status, license, and attribution

Every PIC document published here is an **independently developed draft**, not a standard.

- It has **not** been adopted, endorsed, approved, or published by a
  standards-development organization.
- The RFC-style HTML, text, and XML renderings are publication formats only
  and do not imply standards status.
- It is published solely for public review, research, experimentation, and implementation feedback, and **may be revised,
  replaced, or withdrawn at any time**.
- Publication does **not** constitute certification, endorsement, security approval, interoperability assurance, or regulatory
  recognition.
- **Implementers use these drafts entirely at their own risk.** Any implementation, interoperability statement, or conformance
  claim applies only to the exact document version referenced.

PIC specification materials are available under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The repository
[LICENSE](https://github.com/pic-protocol/pic-spec/blob/main/LICENSE) contains
the license text, while [NOTICE](https://github.com/pic-protocol/pic-spec/blob/main/NOTICE.md)
summarizes origin, stewardship, attribution, canonical versions, and warranty
information without adding restrictions to the license.
