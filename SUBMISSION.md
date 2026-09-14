# Proofloom — submission draft

## One-line pitch

**Proofloom is a GenLayer-native adjudication layer for agent work: a committed rubric and evidence packet become an inspectable ACCEPT, REVISE, or REJECT decision.**

## What makes it special

Most agentic commerce demos stop at a marketplace, a wallet, or a prediction. Proofloom focuses on the missing primitive underneath all of them: **a defensible acceptance decision**. The deliverable is not just a file or answer; it is a packet with provenance. The rubric is committed first. The evidence is inspectable. The dispute path is legible.

## Demo path for reviewers

1. Open the Decision Desk and select **Climate brief · Europe Q3**.
2. Inspect the evidence trail, attached rubric, confidence, and validator count.
3. Open **View contract** to inspect the deployed [Studionet contract](https://explorer-studio.genlayer.com/address/0x603982018aDee45d123bc7a4B157120d106aA867) and the contract seam shown on the page.
4. Click **Request revision** to see a missing requirement move the packet into the appeal/revision window.
5. Click **Resubmit corrected packet** to see the state return to ACCEPT, or click **Open appeal** to hold the case for second review.
6. Click **Run adjudication** to replay the local 5-validator demonstration and inspect the consensus toast.

## Why it is practical

The initial customer is a small team that delegates research, design, QA, or data operations to agents and already loses time debating whether a handoff is “good enough.” Proofloom gives them a reusable agreement template and an evidence-backed decision log. The same packet format can support freelance delivery, API SLAs, automated bug bounties, grants, and agent-to-agent workflow handoffs. The current build is a testnet prototype: its contract records adjudication state but does not custody or transfer funds.

## Track fit

Primary: Agentic Commerce Infrastructure. Secondary: Onchain Justice.

## What is implemented now

- Responsive operator console with real interaction states.
- Evidence trail, rubric hash, packet status, confidence bar, escrow metric, and network health surfaces.
- Local simulation of a 5-validator resolution, revision, resubmission, and appeal state transition.
- Schema-validated GenLayer Intelligent Contract using non-comparative equivalence-based validation, deployed on Studionet at [`0x603982018aDee45d123bc7a4B157120d106aA867`](https://explorer-studio.genlayer.com/address/0x603982018aDee45d123bc7a4B157120d106aA867).
- A successful full-consensus adjudication simulation against a committed climate-brief rubric and hashed evidence packet.
- README with architecture, threat-model notes, source links, and an explicit production-gap disclosure.

## Next milestone after the tank

Add a browser-wallet write path only after the contract is hardened; then introduce caller authorization, hash-to-content verification, deadline rules, appeal-bond accounting, and signed validator receipts alongside the resolved artifact. Until then, the public product is intentionally an adjudication prototype, not a live escrow client.
