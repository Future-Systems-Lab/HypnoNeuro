---
title: HypnoNeuro Game Logic Flowchart
theme: default
---
graph TD

%% Access & Onboarding
A[Start] --> B[Visit HypnoNeuro Website or App]
B --> C[Tap 'Connect Wallet']
C --> D[MetaMask Opens]
D --> E[User Approves Connection]
E --> F[Wallet Connected]
F --> G[Accept Terms & Select Avatar]
G --> H[Choose Therapy Path or Start Guided Tour]
H --> I[Quick Wellness Check (Quiz)]

%% Branch: Acute or Standard Path
I --> J{Are Symptoms Acute?}
J -- Yes --> K[Escalated Intake Path → Direct Scheduling]
J -- No --> L[Start Level 1: Hypnosis Room]

%% Daily Loop Logic
L --> M[Daily Mind Loop Begins]
M --> N[Session Booked?]
N -- No --> O[Send Reminder]
N -- Yes --> P[Attend Session?]
P -- No --> Q[Streak Reset → No Token Awarded]
P -- Yes --> R[+1 Session Toward Token]
R --> S{3 Consecutive Sessions?}
S -- No --> M
S -- Yes --> T[Token Awarded]
T --> U{Total Tokens Earned}
U -- 3 --> V[NFT Reward: L1 → 3% Discount]
U -- 6 --> W[NFT Reward: L2 → 6% Discount]
U -- 9 --> X[NFT Reward: L3 → 9% Discount]

%% Progression Options
X --> Y[Unlock Next Room (L2: Mental Wellness)]
Y --> Z[Repeat Daily Loop with Increased Token Criteria]

%% Alternate Paths
G --> AA[Explore as Guest (Avatar-Only Mode)]
AA --> AB[Limited Access → No Token Progression]

%% Footer
style A fill:#e0f7fa,stroke:#000,stroke-width:1px
style T fill:#c8e6c9,stroke:#388e3c,stroke-width:2px
style V fill:#ffe082,stroke:#fbc02d,stroke-width:2px
style W fill:#ffcc80,stroke:#f57c00,stroke-width:2px
style X fill:#ef9a9a,stroke:#d32f2f,stroke-width:2px
```

<!--
HypnoNeuro – Full Game Logic Diagram
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.
-->
