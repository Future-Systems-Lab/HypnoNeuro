// Rights Reserved, Unlicensed
# Orthomolecular Module MVP Architecture

mermaid
flowchart TD

subgraph UI[Player / Patient UI]
    A1[Login / Wallet Connect]
    A2[Orthomolecular Dashboard]
    A3[Symptom Tracking]
    A4[Medication Tracking + Confirmation]
    A5[Metrics Input (labs, vitals)]
end

subgraph FE[Front-End App (React)]
    F1[Validate Medication Confirmation]
    F2[Send Completion Proof to Smart Contracts]
    F3[Fetch Educational Content from IPFS]
    F4[Display AI Recommendations]
end

subgraph DB[EncryptHealth Off-Chain Database]
    D1[Store Symptoms / Medications / Metrics]
    D2[Store Appointment History]
    D3[Provide Data for AI Engine]
end

subgraph AI[AI Recommendation Engine]
    I1[Analyze Confirmed Data]
    I2[Generate Amino Acid & Detox Recommendations]
    I3[Output Personalized Report → PDF]
end

subgraph SC[Smart Contracts (Testnet/Mainnet)]
    S1[OrthomolecularToken - ERC20]
    S2[OrthomolecularNFT - ERC721]
    S3[Progress Flags: Completion + Compliance]
end

subgraph IPFS[IPFS Storage]
    P1[Educational Content]
    P2[Personalized Reports]
    P3[Game Assets (future modules)]
end

UI --> FE
FE --> DB
DB --> AI
AI --> FE
FE --> SC
SC --> FE
AI --> P2
FE --> P1
SC --> P2
DB --> SC

style UI fill:#dff,stroke:#09c,stroke-width:1px
style FE fill:#eef,stroke:#06f,stroke-width:1px
style DB fill:#ffd,stroke:#cc0,stroke-width:1px
style AI fill:#efe,stroke:#0c0,stroke-width:1px
style SC fill:#fdd,stroke:#c00,stroke-width:1px
style IPFS fill:#fef,stroke:#c6f,stroke-width:1px

