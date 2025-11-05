// Rights Reserved, Unlicensed
# HypnoNeuro

A decentralized mental-wellness and neurofeedback ecosystem connecting verifiable credentials, gamified self-improvement, and privacy-preserving health data through the **EncryptHealth** and **HypnoNeuro** frameworks.

---

## 🔐 Project Overview

HypnoNeuro integrates **ERC-20** and **ERC-721** tokens to gamify mental-wellness engagement, reinforce behavior change, and enable cross-platform incentives.  
Each token is deployed on **Sepolia testnet** and verified on-chain.

---

## 🧠 Core Tokens

| Token | Standard | Network | Address | Explorer |
|--------|-----------|----------|-----------|-----------|
| **HypnoNeuroToken (HNT)** | ERC-20 | Sepolia | 0x8D21A5f67cB60a3B6C02812aEBf3fB894a1b1024 | [View on Etherscan](https://sepolia.etherscan.io/token/0x8D21A5f67cB60a3B6C02812aEBf3fB894a1b1024) |
| **MindMasteryNFT** | ERC-721 L1–L3 | Sepolia | 0xF0E17D991EFC79B734A8fC43f2dEda0022F2F | [View on Etherscan](https://sepolia.etherscan.io/token/0xF0E17D991EFC79B734A8fC43f2dEda0022F2F) |
| **EncryptHealthToken (EHT)** | ERC-20 | Sepolia | 0x9F1C5EaD6c8B82E7818A9b0E959C947cFE5288B | [View on Etherscan](https://sepolia.etherscan.io/token/0x9F1C5EaD6c8B82E7818A9b0E959C947cFE5288B) |

Each token is verified on-chain and linked to the **HypnoNeuro** and **EncryptHealth** ecosystems.

---

## 🧩 Token Logic

- **HNT** powers in-app rewards and DAO governance.  
- **MindMasteryNFT** tracks progression through behavioral mastery levels (L1-L3).  
- **EHT** underpins data-consent and analytics exchange within EncryptHealth.

---

## 🌐 Ecosystem Links

- [EncryptHealth Repository](https://github.com/Future-Systems-Lab/EncryptHealth)
- [MindMasteryNFT Contract (Etherscan)](https://sepolia.etherscan.io/token/0xF0E17D991EFC79B734A8fC43f2dEda0022F2F)
- [HypnoNeuroToken Contract (Etherscan)](https://sepolia.etherscan.io/token/0x8D21A5f67cB60a3B6C02812aEBf3fB894a1b1024)
- [EncryptHealthToken Contract (Etherscan)](https://sepolia.etherscan.io/token/0x9F1C5EaD6c8B82E7818A9b0E959C947cFE5288B)

---

## 🧠 Architecture Summary

1. **Frontend:** Next.js + Wagmi v2 (MetaMask connect)
2. **Smart Contracts:** Solidity (verified on Sepolia)
3. **Backend Integration:** HL7/FHIR mapping & DID-based consent prototypes
4. **Analytics Layer:** Consent and reward tracking (planned for Dune/Graph integration)

See the full system diagram in [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## 🧾 Verification

All tokens verified and published via Hardhat flattening and `npx hardhat verify` before linking to GitHub.

---

## 🖼️ Logo

<img src="web/public/hypnoneurotoken.png" alt="HypnoNeuro Token Logo" width="300"/>

---

© 2025 Future Systems Lab. All Rights Reserved.

---

## 🪙 Token & NFT Logos

| EncryptHealthToken (EHT) | MindMasteryNFT – Foundation | MindMasteryNFT – Elevation | MindMasteryNFT – Ascension |
|---------------------------|-----------------------------|-----------------------------|-----------------------------|
| <img src="web/public/encrypthealthtoken.png" alt="EHT" width="140"/> | <img src="web/public/mindmastery_foundation.png" alt="Foundation" width="140"/> | <img src="web/public/mindmastery_elevation.png" alt="Elevation" width="140"/> | <img src="web/public/mindmastery_ascension.png" alt="Ascension" width="140"/> |


---

## 🪙 Token & NFT Logos

<p align="center">
  <img src="web/public/encrypthealthtoken.png" alt="EncryptHealthToken" width="150" style="margin:10px;"/>
  <img src="web/public/mindmastery_foundation.png" alt="MindMastery Foundation" width="150" style="margin:10px;"/>
  <img src="web/public/mindmastery_elevation.png" alt="MindMastery Elevation" width="150" style="margin:10px;"/>
  <img src="web/public/mindmastery_ascension.png" alt="MindMastery Ascension" width="150" style="margin:10px;"/>
</p>


## Diagrams
- [System Architecture](./ARCHITECTURE.md)
- [Token, NFT, and Compliance Flow](./TOKEN_FLOW.md)

## Docs
See the index in [docs/INDEX.md](./docs/INDEX.md).

## Tokenomics
See [docs/TOKENOMICS.md](./docs/TOKENOMICS.md).

## Contracts
See [docs/CONTRACTS.md](./docs/CONTRACTS.md).

## Local Demo
See [docs/LOCAL_DEMO.md](./docs/LOCAL_DEMO.md).
\n
## CI
[![CI](https://github.com/Future-Systems-Lab/HypnoNeuro/actions/workflows/ci.yml/badge.svg)](https://github.com/Future-Systems-Lab/HypnoNeuro/actions/workflows/ci.yml)
