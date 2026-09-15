# Proofloom Deployment Verification

**Status:** Studio Next migration verified; historical Studionet deployment retained below
**Current contract address:** [`0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0`](https://explorer-studio-dev.genlayer.com/address/0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0)
**Network:** GenLayer Studio Next / Studio Dev, chain `61997`
**Verification date:** 2026-09-15

## Conclusion

The hackathon-required Studio Next migration is complete. The current frontend target is the Studio Next/Studio Dev deployment at `0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0`, using the canonical RPC `https://studio-dev.genlayer.com/api`, chain ID `61997`, `genlayer-js@2.0.0-rc.1`, and `@genlayer/transaction-kit@0.1.0-rc.2`. The frontend now quotes fee-funded writes through the v2 SDK and only treats a transaction as successful when both decision status and execution result succeed.

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

## Corrected runtime-compatible deployment

After the earlier `prompt_non_comparative(..., input=...)` failure, the consensus call was changed to the runtime-compatible mixed form: the packet is positional, while `task=` and `criteria=` are named. The corrected contract was deployed and accepted by Studionet at:

- Contract: `0xaE9aaa259AF3DA090994DfdDD0741AA97fbaf181`
- Deployment transaction: `0xcf670461cdf2b89d6bfed1729657f8e0cd00b9115936fa6287365ff77be7d65`
- Verification adjudication: `0x7d895c4c4d40da4f040c78d4ddad0308867c9307ff7447bea1e40f8c86377994`
- Verification result: `ACCEPTED` after full-consensus proposal, commit, reveal, and consensus completion.

The production frontend and all submission materials now point to this corrected address. The previous instance should not be used for reviewer testing.

## Runtime fix for transaction `0xaed264bca95dc4b4cb720e9b3c15de0e7d335435f7f8183048440a8b2deba129`

The failed call reached consensus but returned a GenVM contract error: `TypeError: 'str' object is not callable`. The cause was passing the evidence string directly as the first argument to `prompt_non_comparative`; the current GenLayer API requires a zero-argument callable that returns the input data. The contract now wraps the evidence in `get_evidence()` and passes that callable. The corrected code was committed as `16b93e2` and upgraded on the existing Studionet instance.

The upgrade transaction finalized successfully at `0x394a7734c8e20b2fbd7a152e6560a9429b4fa3da3c17d3e5bc9c81bc45d84b6c`. The failed transaction did not mutate reputation state or transfer funds.

## Final live adjudication verification

After upgrading the deployed contract with the callable-input fix, a fresh agreement was opened successfully and the live adjudication call was submitted against contract `0xaE9aaa259AF3DA090994DfdDD0741AA97fbaf181`.

- Upgrade transaction: `0x54c37504b156a9217387b51a4de30e7108205c3a505797e503a890e70fee0d5b` — FINALIZED
- Fresh agreement transaction: `0x56cc306bfd7e0780ded08f2e2db7c081b1ab41e5bc0f40db8317ffbd7b391b41` — FINALIZED
- Final live adjudication transaction: `0xa368f27ab64f5dee2b102c6a2c7c3ce2b900a18bc2b2db7779ae4e33d5002e8d`
- Adjudication result observed in Studio: `ACCEPTED`; consensus reached; GenVM execution completed without the former `TypeError: 'str' object is not callable`.
- Test packet hash: `sha256:8f1-demo-packet-v2`

Explorer link: https://explorer-studio.genlayer.com/tx/0xa368f27ab64f5dee2b102c6a2c7c3ce2b900a18bc2b2db7779ae4e33d5002e8d

## Expected duplicate-adjudication guard

Transaction `0x6b182429008c10ccb25ee4ce8cdde8406c2f7529cd8a12939c5d0585b0453d4a` targeted the correct contract and called `adjudicate`, but was submitted after the agreement already had a recorded decision. The contract intentionally reverted with `ValueError("decision already recorded")`; no reputation mutation or fund movement occurred. A new adjudication requires opening a new agreement first, or opening an appeal when the product flow permits it.

## Studio Next deployment

The hackathon notice requires deployment on Studio Next rather than stable Studionet. The compatible Studio Dev environment uses RPC `https://studio-dev.genlayer.com/api`, chain ID `61997`, and explorer `https://explorer-studio-dev.genlayer.com/`. The Studio Next-compatible source is `proofloom_escrow_studionext.py` and the finalized deployment is:

- Contract: `0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0`
- Deployment transaction: `0x613d18378a89f1617626f8e59005c9234e32c76a09c36cd5be2b5b9fb5e8064a`
- Deployment status: `FINALIZED`
- SDK stack: `genlayer-js@2.0.0-rc.1`, `@genlayer/transaction-kit@0.1.0-rc.2`

The public app now switches wallets to chain `61997`, uses the `studioDevnet` chain definition, estimates the exact fee distribution for each write, submits the returned `distribution` and `feeValue`, and verifies the execution result in addition to the consensus status. The earlier Studionet deployment remains in this document as historical verification evidence and is not the current hackathon frontend target.
