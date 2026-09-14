# Proofloom — submission draft

## One-line pitch

**Proofloom is the GenLayer-native adjudication layer for Agent Credit Score: agent work and evidence become inspectable reputation events.**

## What makes it special

Most agentic commerce systems track execution or payment, but neither proves that subjective work was actually completed well. The Agent Credit Score vision needs trustworthy events underneath the score. Proofloom provides that missing primitive: **a defensible acceptance decision**. The deliverable is not just a file or answer; it is a packet with provenance. The rubric is committed first. The evidence is inspectable. The dispute path is legible. A finalized ACCEPT is presented as an evidence-backed reputation event eligible for a future portable agent history; the current prototype does not yet aggregate the score itself.

## Demo path for reviewers

1. Open the Decision Desk and select **Climate brief · Europe Q3**.
2. Inspect the evidence trail, attached rubric, confidence, and validator count.
3. Observe the **Reputation Event** panel: a pending or held outcome cannot count as positive history, while an accepted packet becomes eligible as a future Agent Credit Score input.
4. Open **View contract** to inspect the deployed [Studionet contract](https://explorer-studio.genlayer.com/address/0xaE9aaa259AF3DA090994DfdDD0741AA97fbaf181) and the contract seam shown on the page.
5. Click **Request revision** to see a missing requirement move the packet into the appeal/revision window.
6. Click **Resubmit locally** to see the state return to ACCEPT and the reputation event become eligible, or click **Open on-chain appeal** after connecting a wallet to hold the deployed contract state for second review.
7. Click **Run simulation** to replay the instant local reviewer demonstration. For the live path, connect a wallet funded with test GEN, click **Adjudicate on testnet**, approve the wallet request, and wait for the Studionet decision and refreshed contract status.

## Why it is practical

The initial customer is a small team that delegates research, design, QA, or data operations to agents and already loses time debating whether a handoff is “good enough.” Proofloom gives them a reusable agreement template and an evidence-backed decision log. The same packet format can support freelance delivery, API SLAs, automated bug bounties, grants, and agent-to-agent workflow handoffs. The current build is a testnet prototype: its contract records adjudication state but does not custody or transfer funds.

## Track fit

Primary: Agentic Commerce Infrastructure. Secondary: Onchain Justice.

## What is implemented now

- Responsive operator console with real interaction states.
- Evidence trail, rubric hash, packet status, confidence bar, escrow metric, network health, and reputation-event surfaces.
- Local simulation of a 5-validator-style resolution, revision, resubmission, appeal, and reputation-event state transition, plus a live browser-wallet path for Studionet adjudication and appeal writes.
- Schema-validated GenLayer Intelligent Contract using non-comparative equivalence-based validation, deployed on Studionet at [`0xaE9aaa259AF3DA090994DfdDD0741AA97fbaf181`](https://explorer-studio.genlayer.com/address/0xaE9aaa259AF3DA090994DfdDD0741AA97fbaf181).
- A successful full-consensus adjudication simulation against a committed climate-brief rubric and hashed evidence packet.
- README with architecture, threat-model notes, source links, and an explicit production-gap disclosure.

## Next milestone after the tank

The tank prototype now persists an agent identity, transparent score, outcome counters, and append-only reputation events on-chain. Before production, add multi-agreement indexing, caller authorization, hash-to-content verification, deadline rules, appeal-bond accounting, and signed validator receipts alongside the resolved artifact. The current public product is a live evidence-backed adjudication and score-primitive client, intentionally not a production escrow client.
