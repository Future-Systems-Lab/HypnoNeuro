---
title: HypnoNeuro Game Logic Flowchart
theme: default
---

```mermaid
graph TD

%% Access & Onboarding
A[Start] --> B[Visit HypnoNeuro App or Site]
B --> C[Connect Wallet via MetaMask]
C --> D[Approve Wallet Access]
D --> E[Select Avatar]
E --> F[Accept Terms]
F --> G[Enter Guided Tour or Choose Therapy Path]

%% Entry Point
G --> H[Complete Wellness Quiz]
H --> I{Acute Symptoms?}
I -- Yes --> J[Escalated Path → Direct Scheduling]
I -- No --> K[Start Level 1 - Hypnosis Room]

%% Daily Loop - Level 1
K --> L[Begin Daily Loop]
L --> M[Complete Session?]
M -- No --> N[Send Reminder → No Token]
M -- Yes --> O[+1 Session Count]
O --> P{3 Sessions in a Row?}
P -- No --> L
P -- Yes --> Q[Token Earned]

%% Progression Logic
Q --> R{Total Tokens Earned}
R -- 3 --> S[NFT Reward: L1 = 3% Discount]
R -- 6 --> T[NFT Reward: L2 = 6% Discount]
R -- 9 --> U[NFT Reward: L3 = 9% Discount]
U --> V[Unlock Level 2 - Mental Wellness Room]
V --> W[Begin Next Loop with New Criteria]

%% Guest Path
F --> X[Explore as Guest]
X --> Y[Limited Access → No Token Progression]

<!-- HypnoNeuro – Player Game Logic Diagram Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved. -->
