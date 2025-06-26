graph TD

%% Onboarding & Initial Flow
A[Start] --> B[Visit HypnoNeuro Website or App]
B --> C[Connect Wallet via MetaMask]
C --> D[Wallet Connected and Avatar Chosen]
D --> E[Complete Wellness Quiz]
E --> F{Are Symptoms Acute?}
F -- Yes --> G[Escalated Intake to Practitioner Booking]
F -- No --> H[Enter Level 1 - Hypnosis Room]

%% Level 1 Loop: Hypnosis Game
H --> I[Play Hypnosis Game]
I --> J{Game Completed?}
J -- No --> I
J -- Yes --> K[+1 to Hypnosis Streak]
K --> L{Is Streak Equal to 3}
L -- No --> I
L -- Yes --> M[Token 1 Earned and NFT Level 1: 3% Discount]
M --> N[Access Level 2 - Mental Wellness Room]

%% Level 2 Loop: Orthomolecular Game
N --> O[Play Orthomolecular Game]
O --> P{Game Completed?}
P -- No --> O
P -- Yes --> Q[+1 to Mental Wellness Streak]
Q --> R{Is Streak Equal to 3}
R -- No --> O
R -- Yes --> S[Token 2 Earned and NFT Level 2: 6% Discount]
S --> T[Access Level 3 - Inner Child Room]

%% Level 3 Loop: Inner Child Game
T --> U[Play Inner Child Game]
U --> V{Game Completed?}
V -- No --> U
V -- Yes --> W[+1 to Inner Child Streak]
W --> X{Is Streak Equal to 3}
X -- No --> U
X -- Yes --> Y[Token 3 Earned and NFT Level 3: 9% Discount]
Y --> Z[Post-Mastery]

%% Post-Mastery
Z --> AA[Replay Levels or Redeem NFTs for Practitioner Discounts]

%% Guest Access Option
C --> AB[Explore as Guest – Limited Access]
```

