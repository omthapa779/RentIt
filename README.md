# 📦 Rental Platform (Nepal) – MVP

Peer-to-peer rental platform for Nepal where users can **rent** or **lend** anything – from cameras, guitars, dresses, books, tents to tools. Think "Airbnb for stuff" – built for the Nepali market 🇳🇵.

---

## 🚀 Tech Stack

| Part        | Tech Used           |
|-------------|---------------------|
| Web App     | React (Vite)        |
| Mobile App  | React Native (Expo) |
| Backend API | Node.js + Express   |
| Database    | MongoDB Atlas       |
| Auth        | Firebase Auth       |
| API Style   | REST                |

---

## 🧱 Folder Structure

This is a monorepo containing three main parts:

- `backend/` → Express.js server, REST API, MongoDB connection, routes
- `web/` → React app for desktop & web users
- `app/` → React Native (Expo) app for Android/iOS

At the root:
- `.gitignore`
- `README.md`
- (optional) `pnpm-workspace.yaml` or `package.json` if using workspace managers like pnpm/yarn

---

## ⚙️ Getting Started Locally

### 1. Clone the repo
bash
git clone https://github.com/your-username/rental-platform.git
cd rental-platform

### 2. Install dependencies for each workspace
Backend
  - cd backend
  - npm install
  - npm run dev

Web App
  - cd ../web
  - npm install
  - npm run dev

Mobile App (Expo)
  - cd ../app
  - npm install
  - npx expo start

## 📌 Setup Notes
Make sure MongoDB Atlas is set up and .env file contains:
  - MONGO_URI=your_mongodb_connection_string

Firebase project should be created and config added to both web and app side for auth.

Avoid pushing node_modules/, .env, dist/, or build/ folders – ensure .gitignore is present.

## 👥 Team
Web App: Om Thapa

Mobile App: Bikarsha Ojha

UI / UX: Shreejesh Raj Joshi


## 📄 License
MIT – Open to ideas and improvements. Let's build something that helps Nepal move forward.
