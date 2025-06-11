# 📗 BibleApp — NVM Setup Guide

This project was tested and configured to work with:

- Node.js v20.12.2
- NPM v10.5.0

It is strongly recommended to use [NVM for Windows](https://github.com/coreybutler/nvm-windows) to manage Node versions for this project.

---

## Why use NVM?

✅ Ensures the project always runs on a known stable Node version  
✅ Prevents conflicts if you have other projects using different Node versions  
✅ Makes onboarding faster for new developers or future you

---

## Installing NVM (Windows)

1️⃣ Download the latest **nvm-setup.zip** from:  
👉 https://github.com/coreybutler/nvm-windows/releases

2️⃣ Run the installer → this will install `nvm.exe`.

3️⃣ After installation, open **Command Prompt** or **PowerShell** and run:

```bash
nvm version
```
1️⃣ Install Node 20.12.2:

```bash
    nvm install 20.12.2
```

2️⃣ Use Node 20.12.2:

```bash
    nvm use 20.12.2
```
3️⃣ Verify versions:

```bash
    node -v
    # should show v20.12.2

    npm -v
    # should show 10.5.0
```

## **Notes:**

This project was tested and configured to work best with Node 20.x and NPM 10.x.

Using NPM 11.x or higher caused issues with npx and Tailwind CLI in this project → NPM 10.5.0 works perfectly.

## **Usage Workflow:**
When switching to work on this project:

1️⃣ Run:

```bash
    nvm use 20.12.2
```

👉 Then you can safely run:

```bash npm install
    npm run dev
```

## **Important:**

If you upgrade Node or NPM in the future, you may need to re-test Tailwind / PostCSS configs.

As of June 10, 2025, this stack is stable:

- Node 20.12.2

- NPM 10.5.0

- Tailwind CSS 3.4.3

- PostCSS 8.4.27

- Autoprefixer 10.4.16

# **Summary:**

👉 Using NVM is highly recommended for consistent project builds.

👉 The BibleApp project is NVM-friendly and ready to run with the steps above.

To God be the glory. 🙏 ✨ ✞ 