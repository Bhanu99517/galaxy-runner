# 🚀 Galaxy Runner

> A high-speed 3D neon endless runner with galaxy-themed levels, collectibles, power-ups, and a trophy system.

**[▶ Play Live Demo](https://bhanu99517.github.io/galaxy-runner/)**

---

## 📖 Table of Contents

- [About](#about)
- [Features](#features)
- [Gameplay](#gameplay)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Game Mechanics](#game-mechanics)
- [Shop & Power-Ups](#shop--power-ups)
- [License](#license)

---

## About

Galaxy Runner is a browser-based 3D endless runner built with React and TypeScript. You race through a neon galaxy environment, dodging obstacles, collecting glowing gems and letters, fighting aliens, and unlocking powerful abilities — all in a vibrant, fast-paced experience that ramps up in speed and difficulty across three levels.

---

## Features

- 🌌 **3D Neon Galaxy Aesthetic** — vivid galaxy-colored visuals with a high-speed perspective
- 🏃 **3-Lane Runner Gameplay** — dodge obstacles, collect items, and survive
- 🔤 **Letter Collection System** — collect G-A-L-A-X-Y letters to complete each level
- 💎 **Gem Economy** — gather gems to spend in the mid-level shop
- 👾 **Alien Enemies** — aliens that fire missiles you must dodge
- 🛒 **In-Game Shop** — buy power-ups between levels via a shop portal
- 🧪 **3 Progressive Levels** — speed increases with each letter collected and level cleared
- 🏆 **Victory Screen** — complete all 3 levels to win
- ⚡ **Power-Ups** — Double Jump, Max Life, Heal, and Immortality shield

---

## Gameplay

| Goal | How |
|---|---|
| Stay alive | Dodge obstacles and alien missiles |
| Collect letters | Spell **G-A-L-A-X-Y** to complete a level |
| Earn gems | Collect gems scattered across lanes |
| Reach the shop | Run through the Shop Portal between levels |
| Win the game | Complete all 3 levels |

### Controls

| Action | Key |
|---|---|
| Move Left | `←` Arrow or `A` |
| Move Right | `→` Arrow or `D` |
| Jump | `↑` Arrow, `W`, or `Space` |
| Activate Immortality | `I` (if purchased) |

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **3D Rendering:** Three.js (via React Three Fiber)
- **State Management:** Zustand
- **Styling:** CSS / Tailwind
- **Build Tool:** Vite
- **License:** Apache-2.0

---

## Project Structure

```
galaxy-runner/
├── components/          # All React/Three.js game components
│   ├── GameScene        # Main 3D scene and game loop
│   ├── Player           # Player mesh and movement
│   ├── Obstacle         # Obstacle spawning and collision
│   ├── Gem              # Gem collectibles
│   ├── Letter           # Galaxy letter collectibles
│   ├── Alien            # Enemy aliens and missiles
│   ├── ShopPortal       # Level transition portal
│   ├── Shop             # In-game shop UI
│   ├── HUD              # Heads-up display (score, lives, letters)
│   ├── Menu             # Main menu screen
│   ├── GameOver         # Game over screen
│   └── Victory          # Victory screen
├── App.tsx              # Root component & screen routing
├── store.ts             # Zustand global game state
├── types.ts             # TypeScript enums, interfaces & constants
├── index.tsx            # React entry point
├── index.html           # HTML shell
├── index.css            # Global styles
├── metadata.json        # App metadata
├── tsconfig.json        # TypeScript config
├── .env.example         # Environment variable template
└── package-lock.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Bhanu99517/galaxy-runner.git
cd galaxy-runner

# Install dependencies
npm install
```

### Environment Variables

Copy the example env file and fill in any required values:

```bash
cp .env.example .env
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Game Mechanics

### Speed Progression

Galaxy Runner uses a linear speed model to keep gameplay fair and predictable:

- **Per letter collected:** +10% of base speed (`RUN_SPEED_BASE × 0.10`)
- **Per level completed:** +40% of base speed (`RUN_SPEED_BASE × 0.40`)
- This results in roughly **+100% total speed** per full level cycle by the time all 6 letters are collected and a level is cleared.

### Lanes

- Game starts with **3 lanes**
- Each level adds **2 more lanes** (up to a maximum of 9)

### Levels

There are **3 levels** total. Each level requires collecting all 6 letters (G, A, L, A, X, Y). After completing a level, a **Shop Portal** spawns — run through it to open the shop before the next level begins.

### Lives

- Start with **3 lives**
- Lose a life on collision with an obstacle or missile (unless Immortality is active)
- Reach 0 lives → **Game Over**

### Objects

| Object | Effect |
|---|---|
| **Obstacle** | Lose a life on collision |
| **Gem** | Adds score + gem count |
| **Letter (G/A/L/A/X/Y)** | Contributes to completing the word; increases speed |
| **Shop Portal** | Opens the shop between levels |
| **Alien** | Enemy that fires missiles at the player |
| **Missile** | Projectile from aliens; causes damage |

---

## Shop & Power-Ups

The shop is accessible between levels via the Shop Portal. Spend your gems/score on:

| Item | Effect |
|---|---|
| **Double Jump** | Allows a second jump while airborne (one-time purchase) |
| **Max Life** | Permanently increases max lives by 1 |
| **Heal** | Restores 1 life (up to max) |
| **Immortality** | Grants a 5-second invincibility shield, activated with `I` |

---

## License

This project is licensed under the **Apache License 2.0**.  
See the [LICENSE](https://www.apache.org/licenses/LICENSE-2.0) for details.

---

<div align="center">

Made with 💜 by [Bhanu99517](https://github.com/Bhanu99517)

</div>
