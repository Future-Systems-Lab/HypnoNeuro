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
J -- Yes --> K[Escalated Intake Path → Practitioner Booking]
J -- No --> L[Enter Level 1: Hypnosis Room]

%% Level 1: Hypnosis Loop
L --> M[Start Hypnosis Game]
M --> N{Game Completed}
N -- No --> M
N -- Yes --> P[+1 to Hypnosis Streak]
P --> Q{Streak = 3}
Q -- No --> M
Q -- Yes --> R[Earn Token + NFT Level 1]
R --> S[Access Level 2: Mental Wellness Room]

%% Level 2: Orthomolecular Loop
S --> T[Start Orthomolecular Game]
T --> U{Game Completed}
U -- No --> T
U -- Yes --> V[+1 to L2 Streak]
V --> W{Streak = 3}
W -- No --> T
W -- Yes --> X[Earn Token + NFT Level 2]
X --> Y[Access Level 3: Inner Child Room]

%% Level 3: Inner Child Loop
Y --> Z[Start Inner Child Game]
Z --> AA{Game Completed}
AA -- No --> Z
AA -- Yes --> AB[+1 to L3 Streak]
AB --> AC{Streak = 3}
AC -- No --> Z
AC -- Yes --> AD[Earn Token + NFT Level 3]

%% Mastery Loop
AD --> AE[Mastery Achieved]
AE --> AF[Replay Levels or Redeem NFTs for Practitioner Discounts]

%% Guest Access
G --> AG[Explore as Guest]

```

<!-- 
HypnoNeuro™ NFT Unlock Flow  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.

Dev Note: This logic allows players to unlock NFT-based discounts by completing 3-game streaks across progressive healing levels (Hypnosis, Orthomolecular, Inner Child). Practitioners can be booked once NFTs are earned. Guest mode disables token rewards.
-->

HypnoNeuro — Intellectual Property Statement  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.

This content, design flow, logic structure, and therapeutic gamification sequence  
are the sole intellectual property of Dr. Meg Montañez-Davenport and HypnoNeuro.  
No portion of this document may be reused, duplicated, tokenized, commercialized,  
or repurposed without express written consent.

All rights reserved under applicable international copyright and IP law.  
Violators will be prosecuted to the fullest extent permitted by law.
-->
