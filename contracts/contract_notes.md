# 📜 Smart Contract Notes – EncryptHealth™

This document outlines the architecture, logic, and special conditions for smart contracts used in the EncryptHealth™ ecosystem.

---

## 🔧 Contract Architecture

- **Standard Used:** ERC-20 (via OpenZeppelin)
- **Primary Token Contract:** `EHT.sol`

---

## ⚙️ Functions Implemented

- `mint(address to, uint256 amount)`  
  – Restricted to admin wallet for controlled supply minting.  
- `transfer(address to, uint256 amount)`  
  – Standard ERC20 function.  
- `burn(uint256 amount)` *(optional)*  
  – Not yet active, reserved for DAO implementation phase.

---

## 🚫 What’s *Not* Included

- No public minting  
- No airdrop logic  
- No presale or initial DEX offering  
- No upgradable proxy pattern yet

---

## 🛡️ Security & Governance Notes

- **Admin Control:** Currently owned by dev wallet; will transition to DAO multisig later.  
- **Verification:** Code + ABI verified on Etherscan (Sepolia)  
- **Pausable Contract:** Pausable module will be added for emergency shutdown in Phase 2.

---

## 🌐 Token Display Issue

- On Sepolia, full token name ("EncryptHealth") displayed in MetaMask.  
- Will abbreviate to **EHT** for Ethereum Mainnet to improve wallet UI.

---

© 2025 Dr. Meg Montañez-Davenport. All rights reserved.  
EncryptHealth™ is a proprietary innovation of Naturopathic Psychology & Hypnosis Center®, LLC.
