# Proofloom Deployment Verification

**Status:** Verified on GenLayer Studionet
**Contract address:** [`0x297E74d8eF267612b2635EbDd8033FC1786E7B90`](https://explorer-studio.genlayer.com/address/0x297E74d8eF267612b2635EbDd8033FC1786E7B90)
**Network:** GenLayer Studionet
**Verification date:** 2026-09-14

## Conclusion

Proofloom now has a deployed, publicly inspectable **Intelligent Contract** on GenLayer Studionet. The contract stores a committed delivery rubric and its external hash, accepts an evidence packet and packet hash, uses GenLayer's non-comparative Equivalence Principle to reach a normalized adjudication outcome, and exposes an appeal state. The public product remains available at [proofloom-one.vercel.app](https://proofloom-one.vercel.app), and its source repository is [farzad-eth/proofloom](https://github.com/farzad-eth/proofloom).

> **Scope limit:** This deployment is a testnet adjudication contract. It does not custody, release, or transfer production funds. A real escrow module requires explicit authorization, economic accounting, and an independent security review.

## Verification record

| Check | Result | Evidence |
|---|---|---|
| Contract schema compilation | Passed | The Studionet RPC detected the two constructor fields and all four public methods. |
| Testnet deployment | Passed | The deployment reached `ACCEPTED`, then `FINALIZED`, at the address above. |
| Initial state read | Passed | `get_status()` returned `PENDING:HELD:NONE:0`. |
| Consensus adjudication | Passed | A full-consensus simulation completed against a climate-brief packet containing citations, a confidence statement, and limitations. |
| Public web application | Passed | The hosted Decision Desk renders its evidence trail, rubric, dispute state, and resolution simulation. |
| Public repository | Passed | The repository is publicly reachable and contains the site, submission copy, contract, and this verification record. |

## Contract behavior

The contract is written in Python for the current Studio runtime. The persisted `confidence` field uses `u16` rather than Python `int`, because persisted GenLayer fields must use a fixed-size integer type or `bigint`. The constructor takes a rubric and a SHA-256 commitment. `adjudicate` supplies the rubric and packet as data to `prompt_non_comparative`, accepts only `ACCEPT`, `REVISE`, or `REJECT`, and writes state only after consensus returns. `open_appeal` holds settlement and reopens a recorded decision for another review.

GenLayer requires LLM-backed or otherwise variable operations to execute within an approved non-deterministic consensus pattern, while persistent state updates occur only after consensus. Proofloom follows this separation. [1] The current implementation also treats rubric and evidence text as untrusted input in its adjudication criteria.

## Security posture and next production step

The deployment deliberately excludes token custody. The primary remaining controls are authentication and financial logic: authorized buyer and seller roles, exact asset accounting, replay protection, deadline rules, appeal bonds, and an audited settlement module. These are not cosmetic additions; they are required before using Proofloom with valuable assets.

| Area | Current testnet behavior | Required before production |
|---|---|---|
| Adjudication | Consensus-based decision over a rubric and packet | Keep the normalized-output guard and add explicit policy/version controls. |
| Authorization | Open Studio test account flow | Restrict agreement, adjudication, and appeal calls to defined parties. |
| Funds | No fund transfer or custody | Use audited escrow accounting and token-transfer integration. |
| Appeals | State is held and re-review is permitted | Add deadlines, bonds, payer/payee roles, and a bounded appeal policy. |
| Evidence commitments | Rubric and packet hashes are supplied and recorded | Enforce on-chain or verifier-backed hash validation and signed artifact references. |

## References

[1]: https://docs.genlayer.com/developers/intelligent-contracts/features/non-determinism "GenLayer Documentation: Non-determinism"
[2]: https://docs.genlayer.com/developers/intelligent-contracts/storage "GenLayer Documentation: Persisting data on the blockchain"
[3]: https://docs.genlayer.com/developers/intelligent-contracts/tools/genlayer-studio/deploying-contract "GenLayer Documentation: Deploy Contracts"
[4]: https://docs.genlayer.com/developers/networks "GenLayer Documentation: Networks"

## v0.3.0 reputation upgrade

The contract at the address above is the reputation-aware v0.3.0 instance. Its constructor initializes an agent profile at `atlas-researcher` with a baseline score of `500`. The contract adds persistent `reputation_score`, accepted/revise/rejected counters, and append-only `reputation_history` storage, plus the read methods `get_reputation`, `get_history`, and `get_agent_profile`.

A full-consensus adjudication was exercised in GenLayer Studio on 2026-09-14 with a passing Europe Q3 climate packet. The adjudication transaction reached `ACCEPTED` and then `FINALIZED`; the resulting state update appends an ACCEPT reputation event and increases the score by 10 points. The deployment transaction was `0x6d74fc7c5077098d955fac645981e5edc884aa5fa7367bc7afdb7aefbee0646b`, and the adjudication transaction was `0x4c3a6c42f578e00c1046410d2321e7eb45b2c058878683b6bf274ce2d556b505`.

This remains a testnet prototype. The score is an explicit, transparent aggregation primitive—not a claim of production identity reputation. Caller authorization, hash verification, deadlines, appeal bonds, and multi-agreement aggregation remain required before valuable assets or formal credit decisions are supported.
