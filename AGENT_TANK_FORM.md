# Proofloom — Agent Tank Submission Form

This sheet contains copy-ready content for the Agent Tank form. It uses only claims supported by the current public website, repository, Studio Next contract source, and Studio Dev verification record.

## Submission settings

| Field | Value |
|---|---|
| Track | Agentic Commerce Infrastructure |
| Project name | Proofloom |
| Logo | Upload `proofloom-logo.png` from the repository root. |
| Demo video | Upload a short public walkthrough; the hackathon notice says this is mandatory even if the portal labels it optional. |
| Contract link | https://explorer-studio-dev.genlayer.com/address/0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0 |

## Project summary

```text
Proofloom is the adjudication layer for Agent Credit Score: GenLayer consensus turns agent work, evidence, and disputes into portable ACCEPT, REVISE, or REJECT reputation events.
```

## Project overview

```text
Proofloom is the adjudication primitive for an on-chain Agent Credit Score. A buyer or team defines a natural-language acceptance rubric before delivery. An agent submits a delivery packet with cited evidence and a reproducible artifact. Proofloom records rubric and packet commitments, evaluates the packet against the rubric through GenLayer's non-comparative Equivalence Principle, and normalizes consensus to ACCEPT, REVISE, or REJECT. A finalized ACCEPT updates a transparent on-chain score and appends an evidence-backed reputation event; REVISE and REJECT remain visible as accountable outcomes rather than opaque score changes. The operator console exposes the evidence trail, rubric, packet status, validator surface, appeal state, and reputation-event status. The build includes a public responsive demo and a Python Intelligent Contract deployed on GenLayer Studio Next/Studio Dev, chain 61997. It is a testnet prototype: the contract does not custody or transfer production funds, implement caller authorization, enforce deadlines, verify supplied hashes against canonical artifacts, or implement appeal bonds. Those controls belong in the next protocol layer and a separately audited production module.
```

## How-to steps

### Step 1 — Open the demo

```text
Open https://proofloom-one.vercel.app and wait for the Proofloom Decision Desk to load. The page is a responsive reviewer console with separate local-simulation and live Studio Next transaction controls.
```

### Step 2 — Inspect the evidence packet

```text
Select "Climate brief · Europe Q3". Inspect the evidence trail, cited sources, rubric requirements, packet hash, confidence indicator, validator count, and current review status.
```

### Step 3 — Inspect the GenLayer contract

```text
Click "View contract" in the demo, then open the linked Studio Next contract. Alternatively, open: https://explorer-studio-dev.genlayer.com/address/0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0
```

### Step 4 — Run the product demonstration

```text
Click "Request revision" to demonstrate a missing rubric requirement and the appeal/revision window. Observe that the reputation event is held rather than counted. Then click "Resubmit locally" to return the packet to ACCEPT and observe the eligible evidence-backed reputation event. For the live path, connect a wallet to Studio Next, click "Open new agreement" before the first adjudication, approve the fee estimate and wallet request, and wait for the GenLayer decision before the UI refreshes the contract status. Finally click "Run simulation" to replay the instant local reviewer walkthrough. A demo video should show this path because it is mandatory for the hackathon.
```

### Step 5 — Inspect the implementation

```text
Open https://github.com/farzad-eth/proofloom and read proofloom_escrow.py. Confirm the declared persistent fields, the u16 confidence field, the prompt_non_comparative consensus call, the ACCEPT/REVISE/REJECT output guard, the state transition, and the appeal state.
```

## Expected verification outcome

```text
The public Decision Desk loads the Climate brief packet with its evidence trail, rubric requirements, packet metadata, confidence indicator, validator count, and review status. View contract exposes the deployed GenLayer Studio Next address. Request revision and Resubmit locally demonstrate the local revision state; Run simulation shows the instant local reviewer walkthrough. With a wallet connected to chain 61997, the live controls estimate and submit fee-funded writes, wait for consensus plus successful execution, and refresh get_status without moving or custodying tokens. The public repository contains proofloom_escrow_studionext.py, a Studio Next-compatible Python Intelligent Contract whose deployment finalized at 0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0. Its adjudicate method sends rubric and packet text through gl.eq_principle.prompt_non_comparative, accepts only ACCEPT, REVISE, or REJECT, and records the resulting decision state.
```

## Project links

| Field | Value |
|---|---|
| Website | https://proofloom-one.vercel.app |
| GitHub repository | https://github.com/farzad-eth/proofloom |
| Contract link | https://explorer-studio-dev.genlayer.com/address/0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0 |

## Final reviewer note

```text
Proofloom is intentionally presented as a testnet adjudication prototype rather than a production escrow. Its GenLayer-specific contribution is the use of an Intelligent Contract and non-comparative Equivalence Principle to turn natural-language delivery requirements and evidence into a normalized, inspectable decision state. The UI combines an instant local operator-console walkthrough with a live wallet-connected Studio Next write path; the deployed contract is publicly inspectable and was deployed and finalized on Studio Dev chain 61997. Real token custody, caller authorization, deadline enforcement, hash verification, appeal bonds, and production settlement are not claimed and require a separate security-reviewed implementation.
```

## Accuracy checklist before submitting

- Confirm the GitHub account linked in the portal owns `farzad-eth/proofloom`.
- Select **Agentic Commerce Infrastructure** as the primary track.
- Paste the website, repository, and contract links exactly as shown above.
- Keep the local-simulation disclosure in both the overview and verification outcome.
- Describe the UI as a live Studio Next transaction client for fee-aware adjudication and agreement writes, while distinguishing the local simulation controls.
- Do not claim that Proofloom has transferred or released real funds; the contract records adjudication state only and does not custody tokens.
- Connect the wallet associated with the hackathon entry.
- Review the complete form before pressing the final public submission button.

## Verification references

[1]: https://docs.genlayer.com/developers/intelligent-contracts/features/non-determinism "GenLayer non-determinism and equivalence guidance"
[2]: https://docs.genlayer.com/developers/intelligent-contracts/storage "GenLayer persistent storage guidance"
[3]: https://docs.genlayer.com/developers/decentralized-applications/writing-data "GenLayer browser-wallet and write-transaction guidance"
[4]: https://docs.genlayer.com/api-references/genlayer-js/contracts "GenLayerJS contract interaction reference"
[5]: https://github.com/farzad-eth/proofloom "Proofloom public repository"
[6]: https://proofloom-one.vercel.app "Proofloom public demo"
[7]: https://explorer-studio-dev.genlayer.com/address/0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0 "Proofloom Studio Next contract"

The contract's use of declared persistent fields, a fixed-size `u16` confidence value, and `prompt_non_comparative` is consistent with the cited GenLayer guidance [1] [2]. The current demo implements the browser-wallet write flow described in the transaction guidance [3] [4], including fee estimation, decision tracking, and post-consensus status refresh; it does not custody or transfer tokens.
