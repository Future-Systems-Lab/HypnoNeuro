// Rights Reserved, Unlicensed

# 🧠 HypnoNeuro

Gamified decentralized mental-wellness ecosystem integrating verifiable credentials, token rewards, and practitioner consent modules.

---

## Overview

HypnoNeuro connects **patients and practitioners** in a privacy-first ecosystem using decentralized identity and token incentives.  
Built under the **Future Systems Lab**, it links wellness compliance, consent governance, and reward tokens through smart contracts and wallet-based authentication.

### Current MVP (Phase 1)

- MetaMask login flow (working)
- Consent toggle demo (mock HL7/FHIR adapter)
- HypnoNeuroToken ERC-20 on Sepolia
- NFT credentialing (MindMasteryNFT L1–L3)
- Practitioner + User dashboards
- Local analytics view (session compliance)
- Ready for Phase 2: DAO governance + token-minted rewards

---

## Screenshots

| Step | Preview |
|------|----------|
| Login | ![Login](web/public/1_hypnoNeuroLogin.png) |
| Wallet Connect | ![Wallet Connect](web/public/2_hypnoNeuroConnect.png) |
| Dashboard | ![Dashboard](web/public/3_hypnoNeuroLogin2.png) |

---

## Smart Contracts (Deployed on Sepolia)

| Contract | Address | Description |
|-----------|----------|--------------|
| HypnoNeuroToken | 0x... | ERC-20 governance + rewards |
| MindMasteryNFT | 0x... | ERC-721 L1–L3 credential NFT |
| EncryptHealthToken | 0x... | Shared token utility with EncryptHealth |

---

## Run Locally

\`\`\`bash
cd web
pnpm install
pnpm exec next dev -p 3012
\`\`\`

Then open:  
http://localhost:3012

---

© Future Systems Lab | HypnoNeuro Project | Rights Reserved, Unlicensed
