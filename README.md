<p align="center">
  <img src="assets/JamSesh Banner v1.png" alt="Jam Sesh Banner" width="100%" />
</p>

**Connecting local musicians, one jam at a time.**
---

# About Jam Sesh
Jam Sesh is a community-driven platform designed to bring together local musicians, bands, venues, and fans in one easy-to-use space. Whether you're looking for a bassist, booking your next gig, or promoting a house show, Jam Sesh helps you connect with your city's music scene — no hassle, no noise.

## Key Features

### 🎸 Find Local Musicians
Looking to complete your band lineup? Instead of posting flyers or sending endless messages, use Jam Sesh to find guitarists, drummers, vocalists, and more nearby. Location-based posts make it simple to discover and connect with artists in your town.

### 🎵 Organize Gigs with Ease  
Skip the back-and-forth DMs. Bands and venues can quickly coordinate show dates, share availability, and fill open slots — all through Jam Sesh's streamlined local event board.

### 📢 Promote Your Music and Events
Say goodbye to scattered posts and low visibility. Jam Sesh acts as a digital bulletin board where you can promote house shows, share new tracks, and post event flyers directly to your local music community.

### 🌟 Build a Thriving Local Scene
More than just a tool for booking or recruiting, Jam Sesh helps you plug into your city's underground music network. Whether you're new or a long-time local, this is your hub to collaborate, discover new talent, and grow your music scene.

### 💬 Real-Time, Forum-Style Community
Inspired by platforms like Reddit and Yik Yak, Jam Sesh delivers real-time, location-tied posts in a forum-style feed. No algorithmic filters — everyone sees every post equally, fostering genuine connections based on shared geography, not follower counts.
---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9+)
- AWS CLI (for deployment)
- Amplify CLI (`npm install -g @aws-amplify/cli`)

### Installation

```bash
git clone https://github.com/matupper/jam-sesh.git
cd jam-sesh
npm install
```

### Running Locally

- **Expo Go (mobile):**
  ```bash
  npm start
  ```
  Scan the QR code with Expo Go app.

- **Web:**
  ```bash
  npm run web
  ```

---

## Deployment

- **Production build for web:**
  ```bash
  npx expo export:web
  ```
- **Deploy to AWS Amplify:**  
  Push to the `main` branch (or your deployment branch).

---

## Project Structure

- `src/` - App source code
- `docs/` - Project documentation/specs
- `web-build/` - Production web build (for Amplify)
- `amplify.yml` - Amplify build settings

---

## Configuration

- AWS credentials: stored in `~/.aws/credentials` (never commit these!)
- Environment variables: (add details if needed)

---

## Contact

- Matias Tupper ([email](matias.a.tupper@gmail.com))
- Tanish Hupare 
