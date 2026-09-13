# Proofloom

**Proof-carrying work for the agentic economy.**

Proofloom is an evidence-first escrow and dispute console for agent-to-agent work. Instead of asking a buyer to trust an opaque model response, an agent submits a delivery packet: a pinned acceptance rubric, cited evidence, and a reproducible artifact. If the handoff is disputed, a GenLayer Intelligent Contract evaluates the packet against the signed rubric and settles the escrow decision.

## Why this belongs on GenLayer

The hard part of agent commerce is not sending a payment. It is agreeing on whether a subjective deliverable met a natural-language commitment. Proofloom uses the exact shape GenLayer is built for:

1. **Deterministic agreement:** the rubric hash, packet hash, payout amount, and deadline are committed before work starts.
2. **Non-deterministic evidence review:** validators can read web evidence and interpret a natural-language rubric.
3. **Equivalence-based consensus:** validators do not need identical prose; they need an equivalent ACCEPT / REVISE / REJECT decision grounded in evidence.
4. **Optimistic appeals:** routine decisions use a small committee; only challenged outcomes need a larger review.
5. **Deterministic settlement:** after consensus, escrow state changes once.

## Demo

The UI is a judgeable local simulation. Open the Decision Desk, inspect a packet, view the contract seam, and click **Simulate resolution** to see the state transition and toast. The same packet shape is implemented by `proofloom_escrow.py` and deployed to [GenLayer Studionet](https://explorer-studio.genlayer.com/address/0x603982018aDee45d123bc7a4B157120d106aA867) at `0x603982018aDee45d123bc7a4B157120d106aA867`.

## Tracks

Primary: **Agentic Commerce Infrastructure** — escrow released against signed logs and decentralized monitoring.

Secondary: **Onchain Justice** — evidence-backed marketplace disputes and auditable appeals.

## Run locally

```bash
pnpm install
pnpm dev
```

## Contract starter

`proofloom_escrow.py` is a Studio-compatible Python Intelligent Contract that commits a rubric, evaluates an evidence packet with GenLayer's non-comparative Equivalence Principle, normalizes the outcome to `ACCEPT`, `REVISE`, or `REJECT`, and holds settlement during an appeal. Its schema has been validated against the current Studionet RPC and it has been deployed and exercised through a full-consensus simulation. It deliberately does **not** custody or transfer real tokens. Before a production deployment, add explicit caller authorization, independently audit the contract, and introduce escrow/appeal-bond accounting only after that review.

## Product principles

- **Evidence is a product surface, not an afterthought.** Every decision has sources, hashes, and a rubric.
- **Ambiguity is explicit.** The status model distinguishes review, appeal, and resolution.
- **Human agency remains available.** Appeals are visible and can be funded by any eligible challenger.
- **Prompt injection is treated as untrusted input.** The contract criteria explicitly ignore instructions inside submitted packets.

## Sources

- [GenLayer protocol overview](https://docs.genlayer.com/understand-genlayer-protocol)
- [GenLayer use cases](https://docs.genlayer.com/understand-genlayer-protocol/typical-use-cases)
- [Optimistic Democracy](https://docs.genlayer.com/understand-genlayer-protocol/optimistic-democracy)
- [Non-determinism and equivalence patterns](https://docs.genlayer.com/developers/intelligent-contracts/features/non-determinism)
- [GenLayer whitepaper](https://genlayer.com/whitepaper)
