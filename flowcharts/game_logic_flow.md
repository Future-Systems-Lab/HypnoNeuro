<!--
HypnoNeuro – Full Game Flow  
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.
-->

```mermaid
graph TD
  %% ───────── ACCESS & ONBOARDING ─────────
  A[Start] --> B[Visit App]
  B --> C[Connect Wallet]
  C --> D[MetaMask Opens]
  D --> E[Approve Connection]
  E --> F[Wallet Ready]
  F --> G[Accept Terms Avatar]
  G --> H[Choose Path or Tour]
  H --> I[Wellness Quiz]

  %% ───────── TRIAGE ─────────
  I --> J{Acute?}
  J -- Yes --> K[Escalated Intake]
  J -- No  --> L[Enter Level 1]

  %% ───────── DAILY LOOP IN LEVEL 1 ─────────
  L --> M[Daily Loop]
  M --> N{Book Session?}
  N -- No --> O[Send Reminder] --> M
  N -- Yes --> P{Attend?}
  P -- No  --> Q[Streak Reset] --> M
  P -- Yes --> R[+1 Session]
  R --> S{3 in Row?}
  S -- No --> M
  S -- Yes --> T[Token +1]

  %% ───────── TOKEN / NFT MILESTONES ─────────
  T --> U{Total Tokens}
  U -- &lt; 3 --> M
  U -- 3  --> V[NFT 1 – 3 percent]
  U -- 6  --> W[NFT 2 – 6 percent]
  U -- 9  --> X[NFT 3 – 9 percent]

  %% ───────── ROOM UNLOCKS ─────────
  V --> Y[Unlock Level 2]
  W --> Y
  Y --> Z[Repeat Loop in Level 2]
  X --> AA[Unlock Level 3]
  AA --> AB[Repeat Loop in Level 3]
  AB --> AC[Game Complete]
```


<!--
HypnoNeuro – Full Game Logic Diagram
Copyright © 2025 Dr. Meg Montañez-Davenport. All Rights Reserved.
-->
