# Proofloom

**Proof-carrying work for the agentic economy.**

Proofloom is a GenLayer-native evidence adjudication layer for agent-to-agent work. Instead of asking a buyer to trust an opaque model response, an agent submits a delivery packet: a committed acceptance rubric, cited evidence, and a reproducible artifact. GenLayer consensus turns the packet into an inspectable `ACCEPT`, `REVISE`, or `REJECT` decision.

## Why this belongs on GenLayer

The hard part of agent commerce is not sending a payment. It is agreeing on whether a subjective deliverable met a natural-language commitment. Proofloom uses the exact shape GenLayer is built for:

1. **Deterministic agreement:** the rubric hash and packet hash are recorded before adjudication; payout and deadline enforcement are explicitly future production work.
2. **Non-deterministic evidence review:** validators can read web evidence and interpret a natural-language rubric.
3. **Equivalence-based consensus:** validators do not need identical prose; they need an equivalent ACCEPT / REVISE / REJECT decision grounded in evidence.
4. **Optimistic appeals:** routine decisions use a small committee; only challenged outcomes need a larger review.
5. **Deterministic state transition:** after consensus, the testnet contract records the decision and changes its held/released status; it does not transfer funds.

## Demo

The UI includes both a fast local simulation and a real browser-wallet testnet path. Open the Decision Desk, inspect the evidence packet and rubric, use **Run simulation** for the instant reviewer walkthrough, or connect a wallet and use **Adjudicate on testnet** / **Open on-chain appeal** to submit a real GenLayer Studionet transaction. The deployed contract is linked directly in the header, packet status, and contract panel; the panel exposes its Studionet network, address, and public methods. The same adjudication shape is implemented by `proofloom_escrow.py` and deployed to [GenLayer Studionet](https://explorer-studio.genlayer.com/address/0x603982018aDee45d123bc7a4B157120d106aA867) at `0x603982018aDee45d123bc7a4B157120d106aA867`.

### Wallet and testnet flow

Click **Connect wallet** in the top bar. Proofloom requests the browser wallet account, switches to or adds GenLayer Studionet (`chainId 61999`), reads the deployed contract status, estimates the current GenLayer fee policy, and submits the selected write through GenLayerJS. The wallet must hold test GEN for consensus fees. After submission, the UI keeps the transaction hash visible and waits for the GenLayer decision before refreshing `get_status`.

## Tracks

Primary: **Agentic Commerce Infrastructure** — evidence-backed acceptance decisions for agent delivery handoffs.

Secondary fit: **Onchain Justice** — rubric-bound disputes, revision paths, and auditable appeals.

## Run locally

```bash
pnpm install
pnpm dev
```

## Contract starter

`proofloom_escrow.py` is a Studio-compatible Python Intelligent Contract that commits a rubric, evaluates an evidence packet with GenLayer's non-comparative Equivalence Principle, normalizes the outcome to `ACCEPT`, `REVISE`, or `REJECT`, and holds the recorded outcome during an appeal. Its schema has been validated against the current Studionet RPC and it has been deployed and exercised through a full-consensus simulation. It deliberately does **not** custody or transfer real tokens, verify that a supplied hash matches its text, enforce deadlines, or authorize callers. Before a production deployment, add those controls, independently audit the contract, and introduce escrow/appeal-bond accounting only after that review.

## Product principles

- **Evidence is a product surface, not an afterthought.** Every decision has sources, hashes, and a rubric.
- **Ambiguity is explicit.** The status model distinguishes review, appeal, and resolution.
- **Human agency remains available.** Appeals are visible in the state machine; production eligibility, bonds, deadlines, and roles remain to be implemented.
- **Prompt injection is treated as untrusted input.** The contract criteria explicitly ignore instructions inside submitted packets.

## Sources

- [GenLayer protocol overview](https://docs.genlayer.com/understand-genlayer-protocol)
- [GenLayer use cases](https://docs.genlayer.com/understand-genlayer-protocol/typical-use-cases)
- [Optimistic Democracy](https://docs.genlayer.com/understand-genlayer-protocol/core-concepts/optimistic-democracy)
- [Non-determinism and equivalence patterns](https://docs.genlayer.com/developers/intelligent-contracts/features/non-determinism)
- [GenLayer whitepaper](https://genlayer.com/whitepaper)
