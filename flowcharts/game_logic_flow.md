<!--  
HypnoNeuro – Game Logic Flow  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.  
-->

graph TD
  A[Start] --> B[Visit HypnoNeuro Website or App]
  B --> C[Tap Connect Wallet]
  C --> D[MetaMask Opens]
  D --> E[User Approves Connection]
  E --> F[Wallet Connected]
  F --> G[Accept Terms and Select Avatar]
  G --> H[Choose Therapy Path or Guided Tour]
  H --> I[Quick Wellness Quiz]

  I --> J{Are Symptoms Acute?}
  J -- Yes --> K[Escalated Intake Path → Direct Scheduling]
  J -- No --> L[Start Level 1: Hypnosis Room]

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

  X --> Y[Unlock Next Room (L2: Mental W]()


<!--
HypnoNeuro – Full Game Logic Diagram
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.
-->
