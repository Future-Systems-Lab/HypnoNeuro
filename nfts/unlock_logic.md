---
title: HypnoNeuro NFT Unlock Logic Flowchart
theme: default
---

```mermaid
graph TD

%% Access & Onboarding
A[Start] --> B[Visit HypnoNeuro Website or App]
B --> C[Tap Connect Wallet]
C --> D[MetaMask Opens]
D --> E[User Approves Connection]
E --> F[Wallet Connected]
F --> G[Accept Terms and Select Avatar]
G --> H[Choose Therapy Path or Guided Tour]
H --> I[Complete Wellness Quiz]

%% Therapy Path Branching
I --> J{Are Symptoms Acute}
J -- Yes --> K[Escalated Intake Path for Practitioner Booking]
J -- No --> L[Enter Level 1 - Hypnosis Room]

%% Level 1: Hypnosis Loop
L --> M[Start Hypnosis Game]
M --> N{Game Completed?}
N -- No --> M
N -- Yes --> P[+1 to Hypnosis Streak]
P --> Q{Streak = 3?}
Q -- No --> M
Q -- Yes --> R[Earn Token + NFT Level 1 Unlocked]
R --> S[Access Level 2 - Mental Wellness Room]

%% Level 2: Orthomolecular Loop
S --> T[Start Orthomolecular Game]
T --> U{Game Completed?}
U -- No --> T
AG[Explore as Guest - Limited Mode]
V --> W{Streak = 3?}
W -- No --> T
W -- Yes --> X[Earn Token + NFT Level 2 Unlocked]
X --> Y[Access Level 3 - Inner Child Room]

%% Level 3: Inner Child Loop
Y --> Z[Start Inner Child Game]
Z --> AA{Game Completed?}
AA -- No --> Z
AA -- Yes --> AB[+1 to L3 Streak]
AB --> AC{Streak = 3?}
AC -- No --> Z
AC -- Yes --> AD[Earn Token + NFT Level 3 Unlocked]

%% Mastery Loop
AD --> AE[Mastery Achieved]
AE --> AF[Redeem NFTs for Discounted Practitioner Sessions or Replay Game Levels]

%% Guest Access
G --> AG[Explore as Guest (Limited Mode)]

```

<!--  
HypnoNeuro – NFT Unlock Logic Diagram  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.

Developer Note:  
This flow governs how players progress through self-guided game-based healing and earn NFTs.  
Players must complete 3 consecutive game completions within each level (L1–L3) to earn a token and unlock a corresponding NFT.  

NFTs are NOT cosmetic. They are **functional credentials** that unlock **real-world practitioner discounts**:

- NFT Level 1 (Hypnosis Room Completion): 3% discount on services  
- NFT Level 2 (Mental Wellness Room Completion): 6% discount  
- NFT Level 3 (Inner Child Room Completion): 9% discount  

NFTs can be redeemed inside the app to book **professional sessions with certified providers** at reduced rates.  
Players who fail to complete the 3-game streak must restart that loop from the beginning. This models behavioral consistency and reward reinforcement.
-->
<!--  
HypnoNeuro — Intellectual Property Statement  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.

This content, design flow, logic structure, and therapeutic gamification sequence  
are the sole intellectual property of Dr. Meg Montañez-Davenport and HypnoNeuro.  
No portion of this document may be reused, duplicated, tokenized, commercialized,  
or repurposed without express written consent.

All rights reserved under applicable international copyright and IP law.  
Violators will be prosecuted to the fullest extent permitted by law.
-->
