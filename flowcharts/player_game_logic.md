---
title: HypnoNeuro Game Logic Flowchart
theme: default
---

```mermaid
graph TD

%% Access & Onboarding
A[Start] --> B[Visit HypnoNeuro App or Site]
B --> C[Connect Wallet (MetaMask)]
C --> D[Approve Wallet Access]
D --> E[Select Avatar]
E --> F[Choose Guided Tour or Start Game]
F --> G[Quick Wellness Check]

%% Path Choice
G --> H{Symptoms Acute?}
H -- Yes --> I[Escalated Path → Optional Care]
H -- No --> J[Enter Level 1: Hypnosis Room]

%% Gameplay Loop
J --> K[Begin Daily MindLoop]
K --> L{Completed Game Today?}
L -- No --> M[Streak Broken → Reset Counter]
L -- Yes --> N[+1 Progress Toward Token]

N --> O{3 Consecutive Plays?}
O -- No --> K
O -- Yes --> P[Token Earned (L1)]

%% NFT Milestone Unlocks
P --> Q{Total Tokens Earned}
Q -- 3 --> R[L1 NFT: 3% Discount]
Q -- 6 --> S[L2 NFT: 6% Discount]
Q -- 9 --> T[L3 NFT: 9% Discount]

%% Level Progression
T --> U[Unlock Level 2: Mental Wellness Room]
U --> V[Repeat Daily MindLoop (L2 Criteria)]

%% Guest Option
E --> W[Explore as Guest (Limited Access)]
W --> X[No Token or NFT Progression]

%% Footer
style A fill:#e3f2fd,stroke:#000,stroke-width:1px
style P fill:#c8e6c9,stroke:#2e7d32,stroke-width:2px
style R fill:#ffe082,stroke:#fbc02d,stroke-width:2px
style S fill:#ffcc80,stroke:#f57c00,stroke-width:2px
style T fill:#ef9a9a,stroke:#d32f2f,stroke-width:2px
```

<!--
HypnoNeuro – Full Player Game Logic Diagram  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.
-->
