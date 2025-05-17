<p align="center">
  <img src="assets/jamsesh-banner.png" alt="Jam Sesh Banner" width="100%" />
</p>

**Connecting local musicians, one jam at a time.**

---

## Features

- Location-based musician discovery
- Forum-style posts and profiles
- Expo Go for mobile demo, Amplify for web hosting
- AWS-powered backend (optional)

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
