# 🚀 Vite.js Templates for PowerApps Model-Driven Apps

## 🎯 Goal of This Repository

This repository provides **quick-start templates** for setting up **clean, maintainable TypeScript projects** for client-side scripting in **Model-Driven Apps**.

With **Vite.js**, we streamline:  
✅ **Bundling & modularization** for better maintainability.  
✅ **Performance optimization** with fast builds.  
✅ **A structured development workflow** for scalable scripting.

## ⚙️ Requirements

Before using these templates, ensure you have the following installed:

1️⃣ **[Node.js](https://nodejs.org/)** – Required for running Vite and managing dependencies.  
2️⃣ **Vite.js (installed globally)**

```bash
   npm install -g vite
```

3️⃣ **TypeScript Definitions for Xrm (Dataverse)**

```bash
   npm install --save @types/xrm
```

# 📂 Available Templates

## 1️⃣ Basic - Single Bundled File

✅ One bundled JavaScript file for all scripts (simplifies deployment).

✅ Ideal for small projects or quick setups.

🛠 Build using:

```bash
vite build
```

## 2️⃣ Basic - Multiple Bundled Files

✅ Separates scripts into multiple bundled files for better organization.

✅ Useful for large projects or modular setups.

🛠 Build using default entry point:

```bash
vite build
```

🛠 Or specify a config file for a specific entry:

```bash
vite build --config vite.config.multi.ts
```

🛠 Or use npm scripts to manage multiple build commands (as shown in this repo):

```bash
npm run yourcustomconfig
```

# 🔜 Coming Soon

## 🚀 Advanced templates with:

✅ Unit testing with Vitest

✅ Linting & best practices enforcement

✅ CI/CD support for seamless deployment

✅ Custom utilities for Model-Driven Apps development
