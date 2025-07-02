# 📜 Smart Contract Notes – HypnoNeuro™

This document outlines the architecture, logic, and special conditions for **smart contracts used in the HypnoNeuro™ ecosystem**.

---

## 🔧 Contract Architecture
- **Standard Used:** ERC-20 (via OpenZeppelin)
- **Primary Token Contract:** `HNT.sol` (HypnoNeuro Token)

---

## ⚙️ Functions Implemented

- `mint(address to, uint256 amount)`  
  *Restricted to admin wallet for controlled supply minting.*

- `transfer(address to, uint256 amount)`  
  *Standard ERC-20 transfer functionality.*

- `burn(uint256 amount)` *(optional)*  
  *Not yet active; reserved for future DAO or game economy balancing.*

---

## 🚫 What’s Not Included

- No public minting
- No airdrop logic
- No presale or initial DEX offering
- No upgradable proxy pattern *(planned for later phases if needed)*

---

## 🛡️ Security & Governance Notes

- **Admin Control:** Currently owned by **dev wallet**; will transition to DAO-controlled multisig during Phase 2.
- **Verification:** Code + ABI verified on Etherscan *(Sepolia testnet during initial testing)*.
- **Pausable Contract:** Pausable module will be added for emergency shutdown capabilities in Phase 2.

---

## 🌐 Token Display Note

- On Sepolia, full token name ("HypnoNeuro Token") displayed in MetaMask.
- Will abbreviate to `HNT` for Ethereum Mainnet to improve wallet UI during game wallet management.

---

© 2025 Dr. Meg Montañez-Davenport. All rights reserved.  
HypnoNeuro™ is a proprietary innovation of **Naturopathic Psychology & Hypnosis Center®, LLC**.
