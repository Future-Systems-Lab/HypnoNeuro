---
title: HypnoNeuro NFT Unlock Logic Flowchart
theme: default
---

graph TD

%% Onboarding & Initial Flow
A[Start] --> B[Visit HypnoNeuro Website or App]
B --> C[Connect Wallet via MetaMask]
C --> D[Wallet Connected + Avatar Chosen]
D --> E[Complete Wellness Quiz]
E --> F{Are Symptoms Acute?}
F -- Yes --> G[Escalated Intake → Practitioner Booking]
F -- No --> H[Enter Level 1 – Hypnosis Room]

%% Level 1 Loop
H --> I[Complete Hypnosis Game]
I --> J{3 Successful Plays in a Row?}
J -- No --> I
J -- Yes --> K[Earn Token 1]
K --> L[Unlock NFT Level 1 (3% Practitioner Discount)]
L --> M[Access Level 2 – Mental Wellness Room]

%% Level 2 Loop
M --> N[Complete Orthomolecular Game]
N --> O{3 Successful Plays in a Row?}
O -- No --> N
O -- Yes --> P[Earn Token 2]
P --> Q[Unlock NFT Level 2 (6% Practitioner Discount)]
Q --> R[Access Level 3 – Inner Child Room]

%% Level 3 Loop
R --> S[Complete Inner Child Game]
S --> T{3 Successful Plays in a Row?}
T -- No --> S
T -- Yes --> U[Earn Token 3]
U --> V[Unlock NFT Level 3 (9% Practitioner Discount)]

%% Mastery
V --> W[Mastery Achieved]
W --> X[Replay Levels or Redeem NFTs for Practitioner Services]

%% Guest Mode
D --> Y[Explore as Guest (Limited Access)]

%% Notes
%% All NFTs are soul-bound and linked to token milestones
%% Sessions = Practitioner Bookings; NFTs = Verified Discounts
%% Game completions mimic therapy prep & reward consistency

%% Reserved Rights Footer
%% HypnoNeuro™ — NFT Reward & Redemption Flow
%% Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.

```

---
**Developer Notes:**
- Players must complete **3 consecutive successful plays** to earn a token.
- Each **week**, the token requirement increases by one set (e.g. 3 games → 6 → 9), promoting skill mastery.
- NFTs are **non-transferrable badges** and act as keys to unlock future levels **and** redeem professional services.
- Missed sessions reset the streak. Progress is non-linear but rewards commitment.

---

