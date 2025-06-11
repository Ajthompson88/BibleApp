# 📖 **Bible Companion App**

A modern, dynamic Bible Companion App built with React + Vite + Tailwind CSS.

This app is being built as a full-stack project to provide believers with a clean, beautiful tool for:

✅ Reading Bible passages  
✅ Following reading plans  
✅ Asking Bible questions (QNA)  
✅ Switching between Light and Dark mode  
✅ Learning and exploring Scripture through an interactive UI

---

## 🚀 **Current Progress**

As of June 10th:

✅ React + Vite + TypeScript frontend fully set up  
✅ Tailwind CSS configured cleanly (with correct PostCSS and content paths)  
✅ React Router set up → basic routing works  
✅ Navbar built and working  
✅ Light/Dark mode implemented with toggle button in Navbar  
✅ Smooth transition for Dark/Light mode  
✅ Full-screen layout fixed and tested  
✅ Professional project structure validated

---

## 🔮 **Planned Features**

- Save Light/Dark mode preference in localStorage  
- Add Bible API integration → display passages dynamically  
- Add QNA API integration → answer Bible questions using AI  
- Build Reading Plan Generator  
- Add user authentication (optional future feature)  
- Further refine UI/UX and polish styles

---

## ⚙️ **Tech Stack**

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- [Tailwind CSS](https://tailwindcss.com/) v3.4.3  
- [PostCSS](https://postcss.org/) v8.4.27  
- [Autoprefixer](https://github.com/postcss/autoprefixer) v10.4.16  
- React Router  
- Node.js v20.12.2  
- NPM v10.5.0  
- NVM-windows used to manage Node versions

---

## 🏃 **How to Run the Project (Local Development)**

1️⃣ Clone the project:

```bash
    git clone https://github.com/your-username/BibleApp.git
    cd BibleApp/client
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

🛠️ **Notes and Known Setup Requirements**

✅ This project was tested and works well with:

Node v20.12.2 (recommended — use NVM-windows if needed)

NPM v10.x — using NPM 11.x caused npx issues with Tailwind CLI

Tailwind v3.4.3 → stable and proven with Vite

Important: 

Tailwind config

darkMode: 'class' is used → app toggles dark class on < html > element

Content array is configured correctly to include all src components + index.html

CSS gotcha fixed:

Vite template had body { display: flex; place-items: center; } → this was removed to allow proper full-screen layout.

💻 **Project Structure**

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
    │   │   ├── App.tsx
    │   │   ├── main.tsx
    │   │   ├── index.css
    │   ├── tailwind.config.js
    │   ├── postcss.config.js
    │   ├── package.json
    ├── README.md (this file)


🙏 **Author**

Bible Companion App created by Andrew — Full-stack Developer.

Project started June 9th, 2025 — ongoing.

📅 Changelog (Progress)
- ✅ June 9 → Initial project setup

- ✅ June 10 → Tailwind config debugged and fixed

- ✅ June 10 → Full screen layout fixed

- ✅ June 10 → Light/Dark mode added with toggle and transition

- 🚧 June 11 → Next up → save theme preference, start adding Bible API

🚀 **License**

MIT License.

⭐ **Acknowledgments**

- Tailwind CSS community

- React + Vite community

- Bible API / OpenAI API (to be added soon)

- All who are helping test and build this app. 

To God be the glory. 🙏 ✨ ✞ 