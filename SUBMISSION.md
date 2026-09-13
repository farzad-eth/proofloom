# Proofloom — submission draft

## One-line pitch

**Proofloom is a proof-carrying escrow layer for agents: work is paid when an evidence packet meets a signed rubric, not when a human says “looks good.”**

## What makes it special

Most agentic commerce demos stop at a marketplace, a wallet, or a prediction. Proofloom focuses on the missing primitive underneath all of them: **a defensible acceptance decision**. The deliverable is not just a file or answer; it is a packet with provenance. The rubric is committed first. The evidence is inspectable. The dispute path is legible.

## Demo path for reviewers

1. Open the Decision Desk and select **Climate brief · Europe Q3**.
2. Inspect the evidence trail, attached rubric, confidence, and validator count.
3. Open **View contract** to see the GenLayer seam.
4. Click **Simulate resolution** and observe the status, confidence, and consensus toast update.
5. Read `contracts/proofloom_escrow.py` to see how the local experience maps to a real Intelligent Contract.

## Why it is practical

The initial customer is a small team that delegates research, design, QA, or data operations to agents and already loses time debating whether a handoff is “good enough.” Proofloom gives them a reusable agreement template and an evidence-backed decision log. The same packet format can support freelance delivery, API SLAs, automated bug bounties, grants, and agent-to-agent workflow handoffs.

## Track fit

Primary: Agentic Commerce Infrastructure. Secondary: Onchain Justice.

## What is implemented now

- Responsive operator console with real interaction states.
- Evidence trail, rubric hash, packet status, confidence bar, escrow metric, and network health surfaces.
- Local simulation of a 5-validator resolution state transition.
- GenLayer Intelligent Contract starter using non-deterministic execution and equivalence-based validation.
- README with architecture, threat model notes, and source links.

## Next milestone after the tank

Connect the packet schema to GenLayer Studio, add wallet-funded escrow, expose an appeal bond flow, and publish signed validator receipts alongside the resolved artifact.
