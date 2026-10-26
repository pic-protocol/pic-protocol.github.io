# PIC Website

> **Project record**
> The **Provenance Identity Continuity (PIC) Model** was originally developed
> by **Nicola Gallo**. Its dated research history and primary publications are
> recorded in the [PIC Specification](https://github.com/pic-protocol/pic-spec/blob/main/draft/0.2/pic-spec.md#origins-authorship-and-historical-record).
> The PIC Specifications are published and maintained by **Nitro Agility
> S.r.l.** as Specification Steward.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

---

## Installation


```bash
yarn

```

## Local Development


```bash
yarn start

```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build


```bash
yarn build

```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:


```bash
USE_SSH=true yarn deploy

```

Not using SSH:


```bash
GIT_USER=<Your GitHub username> yarn deploy

```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

---

## License

Code and repository material are governed by this repository's
[Apache License 2.0](LICENSE) unless a file states otherwise. PIC specification
materials linked or rendered by the website remain governed by the license in
the [`pic-spec` repository](https://github.com/pic-protocol/pic-spec/blob/main/LICENSE).

For origin, stewardship, attribution, and canonical-version information, see
the PIC specification repository's
[NOTICE](https://github.com/pic-protocol/pic-spec/blob/main/NOTICE.md).
