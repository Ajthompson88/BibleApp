# 📖 Bible Companion App

A modern, dynamic Bible Companion App built with React + Vite + Tailwind CSS.

This full-stack project is designed to provide believers with a clean, beautiful tool for:

✅ Reading Bible passages  
✅ Following daily reading plans  
✅ Asking Bible questions through an interactive Q&A interface  
✅ Switching between Light and Dark mode  
✅ Saving reading progress locally  
✅ Future support for AI-powered answers (via OpenAI)

---

## 📑 Table of Contents

- [Current Progress & Changelog](#current-progress--changelog)
- [Planned Features](#planned-features)
- [Tech Stack](#tech-stack)
- [Setup & Running the Project](#setup--running-the-project)
- [Project Structure](#project-structure)
- [Author](#author)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## 📅 Current Progress & Changelog

- ✅ **June 9** → Initial project setup (Vite, React, Tailwind, TypeScript)
- ✅ **June 10** → Tailwind config debugged, full screen layout fixed
- ✅ **June 10** → Light/Dark mode toggle added with transition
- ✅ **June 15** → QNA page added with simulated backend + fetch logic + error/loading UI
- ✅ **June 21** → Reading Plan checkboxes with localStorage state
- ✅ **June 22** → About page created and routed
- ✅ **June 23** → Project structure finalized, README updated, root build scripts working
- 🚧 **Upcoming** → Add OpenAI integration, theme persistence, and Bible API access

---

## 🔮 Planned Features

- OpenAI-powered Bible Q&A  
- Save theme preference (light/dark) in localStorage  
- Add Bible passage lookup using API  
- Verse of the Day widget  
- Authentication system for user accounts (optional future feature)  
- Deployment to Vercel or Netlify  
- PWA/mobile version

---

## ⚙️ Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/) v3.4.3  
- [React Router](https://reactrouter.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- Node.js + Express server  
- LocalStorage for persistence  
- OpenAI API (planned)

---

## Setup & Running the Project


1️⃣ Clone the project:
```
    git clone https://github.com/your-username/BibleApp.git
    cd BibleApp
```

2️⃣ Install dependencies:

```bash
    npm install
```
3️⃣ Start development server:

```bash
    npm run dev
```
- App will be available at: http://localhost:5173



✅ **This project was tested and works well with**:

- Node v20.12.2 (recommended — use NVM-windows if needed)

- NPM v10.x — using NPM 11.x caused npx issues with Tailwind CLI

- Tailwind v3.4.3 → stable and proven with Vite

**Important**: 

- Tailwind config

- darkMode: 'class' is used → app toggles dark class on < html > element

- Content array is configured correctly to include all src components + index.html

- CSS gotcha fixed:

- Vite template had body { display: flex; place-items: center; } → this was removed to allow proper full-screen layout.

##  **Project Structure**

    BibleApp/
    ├── client/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   │   └── Navbar.tsx
    │   │   ├── pages/
    │   │   │   ├── Home.tsx
    │   │   │   ├── ReadingPlan.tsx
    │   │   │   ├── QNA.tsx
    │   │   │   └── About.tsx
    │   │   ├── App.tsx
    │   │   ├── main.tsx
    │   │   ├── index.css
    │   ├── tailwind.config.js
    │   ├── postcss.config.js
    │   ├── package.json
    ├── server/
    │   ├── src/
    │   │   ├── index.js
    │   │   └── routes/
    │   │       └── qna.js
    │   ├── package.json
    ├── package.json (root)
    ├── README.md


## **Author**

Bible Companion App created by Andrew — Full-stack Developer

Project started June 9th, 2025 — ongoing.

📫 Contact: [Ajthompson88](https://github.com/Ajthompson88)

## **License**

MIT License.

## **Acknowledgments**

React + Tailwind CSS community

Vite and PostCSS contributors

OpenAI API (integration planned)

Those supporting the app in testing and feedback

✝️ To God be the glory!