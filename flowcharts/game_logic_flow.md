<!--  
HypnoNeuro – Game Logic Flow  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.  
-->

```mermaid
graph TD
  A[Start] --> B[Visit App]
  B --> C[Connect Wallet]
  C --> D[MetaMask Opens]
  D --> E[Approve]
  E --> F[Wallet Connected]
  F --> G[Accept Terms + Avatar]
  G --> H[Choose Path or Tour]
  H --> I[Quick Quiz]
  I --> J{Acute Symptoms?}
  J -- Yes --> K[Escalated Intake]
  J -- No --> L[Enter Level 1]
  L --> M[Start Daily Loop]
  M --> N[Book Session?]
  N -- No --> O[Reminder Sent]
  N -- Yes --> P[Attend Session?]
  P -- No --> Q[Streak Reset]
  P -- Yes --> R[+1 Session]
  R --> S{3 in a Row?}
  S -- No --> M
  S -- Yes --> T[Token Awarded]
  T --> U{Total Tokens}
  U -- 3 --> V[NFT L1 - 3%]
  U -- 6 --> W[NFT L2 - 6%]
  U -- 9 --> X[NFT L3 - 9%]
  X --> Y[Unlock Level 2]
  Y --> Z[Repeat Loop - L2 Criteria]
```

  U -- 3 --> V[NFT Reward: L1 → 3% Discount]
  U -- 6 --> W[NFT Reward: L2 → 6% Discount]
  U -- 9 --> X[NFT Reward: L3 → 9% Discount]

  X --> Y[Unlock Next Room (L2: Mental W]()


<!--
HypnoNeuro – Full Game Logic Diagram
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.
-->
