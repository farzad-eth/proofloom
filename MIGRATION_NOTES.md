# GenLayer Studio Next Migration Notes

Source: https://docs.genlayer.com/developers/consensus-v06-migration (last updated 2026-09-03)

The hackathon notice requires Studio Next. The compatible preview stack is Studio v0.123 RC, `genlayer-js` v2.0 RC, and matching Transaction Kit prerelease. Studio Dev/Studio Next uses RPC `https://studio-dev.genlayer.com/api`, chain ID `61997`, and is separate from stable Studionet chain `61999`.

Fee-funded writes must use an SDK fee estimate and submit the returned `distribution` and `feeValue` unchanged. Applications must consider a transaction successful only when status is ACCEPTED or FINALIZED and the execution result is FINISHED_WITH_RETURN. Appeals should use `getAppealCharge` and the high-level appeal operation rather than a direct unfunded appeal submission.

Installed and locked packages: `genlayer-js@2.0.0-rc.1` and `@genlayer/transaction-kit@0.1.0-rc.2`.

Proofloom Studio Next deployment: `0x7b996DCf65D77900753a243b99e0F8F7EE7a91a0`.
Deployment transaction: `0x613d18378a89f1617626f8e59005c9234e32c76a09c36cd5be2b5b9fb5e8064a`.

The public frontend is being migrated to the Studio Next contract and chain; the previous Studionet deployment remains documented as historical evidence only.
