# Contributing to the PIC Protocol Website

Thank you for contributing to the public PIC Protocol website. This repository
contains the Docusaurus application, public explanatory material, and the data
that links the website to canonical PIC specifications and implementations.

## Scope

Contributions may include:

- corrections to links, dates, terminology, or citations;
- clearer technical explanations and diagrams;
- accessibility, navigation, design, or performance improvements;
- build, dependency, and deployment maintenance; and
- alignment updates following a PIC specification or implementation release.

The website explains and links to PIC; it does not redefine the PIC Model or
the normative requirements of a PIC Specification. Technical claims should be
traceable to the canonical source document.

## Origin and Source Integrity

The **Provenance Identity Continuity (PIC) Model** was originally developed by
**Nicola Gallo**. Its dated public research record is listed in the
[PIC Specification](https://github.com/pic-protocol/pic-spec/blob/main/draft/0.2/pic-spec.md#origins-authorship-and-historical-record).
The PIC Specifications are published and maintained by **Nitro Agility S.r.l.**
as Specification Steward.

Contributions receive credit for the concrete work submitted. They must not
rewrite the dated research record, imply endorsement, or present a website
summary, implementation, branch, preview, or fork as a canonical specification.

## Contribution Process

1. Open or identify an issue for substantive work.
2. Create a focused branch and scoped commits.
3. Update every affected link, page, data source, and redirect.
4. Run `npm run typecheck` and `npm run build`.
5. Open a pull request describing the visible and technical effects.

Maintainers may request revisions or decline changes that conflict with the
project scope, canonical PIC sources, security requirements, or accessibility
expectations.

## Licensing and Right to Contribute

Unless a file states otherwise, contributions are submitted under this
repository's [Apache License 2.0](LICENSE). By submitting a contribution, you
confirm that you created it or otherwise have the right to submit it, that it
contains no confidential material, and that any third-party material and its
license are identified.

PIC specification materials fetched or linked from another repository remain
governed by that source repository's license.

## Automated Language Assistance

Automated language assistance may be used for editing, formatting, or analysis.
The human contributor remains responsible for accuracy, originality,
licensing, citations, and the content submitted.

## Conduct and Questions

All participants must follow the [Code of Conduct](CODE_OF_CONDUCT.md).
Technical disagreement is welcome when it is specific, evidence-based, and
respectful. Questions and proposed corrections should be opened in the issue
tracker.
