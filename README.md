<p align="center">
  <img src="assets/readme/hero.png" alt="pic-protocol.org, built with Docusaurus and deployed to GitHub Pages. The home of the PIC Model, its specification and its tools. Why PIC: the threat model, authority propagation and the three N+1 problems. Formal Model: the research record and the Lean, Tamarin and ProVerif proofs. Specification: draft 0.2, protocols and implementations, with conformance rules. PIC-X: the authority broker and exchange server, Profile 0.2. Ask Your LLM: one copyable context pack that primes a model to read PIC as PIC. Demo: PIC in action, flows, use cases and decentralization with PIC-X checkpoints." width="860">
</p>

<p align="center">
  <a href="https://www.pic-protocol.org"><b>pic-protocol.org</b></a> ·
  <a href="#develop-locally"><b>Develop locally</b></a> ·
  <a href="#deployment"><b>Deployment</b></a> ·
  <a href="https://github.com/pic-protocol/pic-spec"><b>PIC Specification</b></a>
</p>

# PIC Website

This repository is the source of [pic-protocol.org](https://www.pic-protocol.org), the website of the **Provenance Identity Continuity (PIC) Model**.
It explains why PIC exists, publishes the research record and the formal proofs, presents the specification and its implementations, and hosts the identifiers the specification refers to.
The site is a [Docusaurus](https://docusaurus.io/) project; the specification itself is canonical in [pic-spec](https://github.com/pic-protocol/pic-spec), not here.

## What the site contains

| Section       | Path                                                                     | Source                                                                                                                     |
| ------------- | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| Why PIC       | [`/why-pic`](https://www.pic-protocol.org/why-pic)                       | [`docs/why-pic/`](docs/why-pic): the threat model, authority propagation, and the N+1 problems.                            |
| Formal Model  | [`/formal-model`](https://www.pic-protocol.org/formal-model)             | [`docs/formal-model/`](docs/formal-model): the research record and the Lean, Tamarin and ProVerif proofs.                  |
| Specification | [`/specification`](https://www.pic-protocol.org/specification)           | [`docs/specification/`](docs/specification): draft 0.2, protocols, implementations and conformance.                        |
| Ask Your LLM  | [`/ask-your-llm`](https://www.pic-protocol.org/ask-your-llm)             | [`docs/ask-your-llm/`](docs/ask-your-llm): a context pack assembled live from the repositories.                            |
| PIC-X         | [`/pic-x`](https://www.pic-protocol.org/pic-x)                           | [`src/pages/pic-x.tsx`](src/pages/pic-x.tsx): the authority broker and exchange server.                                    |
| Profile 0.2   | [`/profiles/0.2`](https://www.pic-protocol.org/profiles/0.2)             | [`src/pages/profiles/`](src/pages/profiles): the current profile.                                                          |
| Definitions   | `/definitions/…`                                                         | [`src/pages/definitions/`](src/pages/definitions): the token-type and proposal-type identifiers used by the specification. |
| Demo          | [`/pic-in-action.html`](https://www.pic-protocol.org/pic-in-action.html) | [`static/`](static): standalone pages for flows, use cases and decentralization.                                           |

The home page and its sections live in [`src/pages/index.tsx`](src/pages/index.tsx) and [`src/components/`](src/components).
Each documentation area has its own sidebar file at the root: `sidebars-why-pic.ts`, `sidebars-formal-model.ts`, `sidebars-specification.ts` and `sidebars-ask-your-llm.ts`.

## Develop locally

Requirements: Node.js 20 or later, and npm.

```bash
npm ci
npm start
```

`npm start` serves the site at <http://localhost:3000> and reloads most changes live.

```bash
npm run build      # static site into build/
npm run serve      # serve build/ locally, as it will be published
npm run typecheck  # TypeScript check
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through [`.github/workflows/cd.yml`](.github/workflows/cd.yml): `npm ci`, `npm run build`, then the `build/` directory is uploaded as the Pages artifact.
The custom domain is set in [`CNAME`](CNAME).
There is no manual deploy step.

## Contributing

- To list a PIC implementation, open a pull request adding it to [`docs/specification/implementations.md`](docs/specification/implementations.md), with a short description, the targeted specification version and the repository link.
- Normative changes belong in [pic-spec](https://github.com/pic-protocol/pic-spec): the website presents the specification, it does not define it.
- See [`CONTRIBUTING.md`](CONTRIBUTING.md), [`GOVERNANCE.md`](GOVERNANCE.md), [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md), [`MAINTAINERS.md`](MAINTAINERS.md) and [`SECURITY.md`](SECURITY.md).

## Project record

The **Provenance Identity Continuity (PIC) Model** was originally developed by **Nicola Gallo**.
Its dated research history and primary publications are recorded in the [PIC Specification](https://github.com/pic-protocol/pic-spec/blob/main/draft/0.2/pic-spec.md#origins-authorship-and-historical-record).
The PIC Specifications are published and maintained by **Nitro Agility S.r.l.** as Specification Steward.

## License

Code and repository material are governed by this repository's [Apache License 2.0](LICENSE) unless a file states otherwise.
PIC specification materials linked or rendered by the website remain governed by the license in the [pic-spec repository](https://github.com/pic-protocol/pic-spec/blob/main/LICENSE).
For origin, stewardship, attribution and canonical-version information, see the pic-spec [NOTICE](https://github.com/pic-protocol/pic-spec/blob/main/NOTICE.md).
