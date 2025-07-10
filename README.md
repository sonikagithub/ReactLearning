# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

➤ Step 1: Install Node.js
To run React and Vite, install Node.js from the official website:
🔗 https://nodejs.org/
Check if Node.js and npm are installed:

bash
Copy
Edit
node -v
npm -v
➤ Step 2: Create a New Vite + React Project
Use the Vite CLI to create a React project:

bash
Copy
Edit
npm create vite@latest my-app -- --template react
Replace my-app with your project name.
Move into your project folder:

bash
Copy
Edit
cd my-app
Vite Docs: 🔗 https://vitejs.dev/guide/

➤ Step 3: Install Dependencies
Run this command to install the project dependencies:

bash
Copy
Edit
npm install
➤ Step 4: Install Tailwind CSS
Install Tailwind CSS and its dependencies:

bash
Copy
Edit
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Tailwind Docs: 🔗 https://tailwindcss.com/docs/installation

➤ Step 5: Configure Tailwind in Your Project
Edit the tailwind.config.js file like this:

js
Copy
Edit
module.exports = {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}
Add Tailwind's directives in src/index.css:

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
➤ Step 6: Import Tailwind in Your Project
Open src/main.jsx and make sure you import the CSS:

jsx
Copy
Edit
import './index.css';
➤ Step 7: Run the React App
Start your Vite server:

bash
Copy
Edit
npm run dev
Your project will open at:
🔗 http://localhost:5173

➤ Step 8: Start Small React Tasks
Open src/App.jsx.

Replace the content with your own JSX.

Add headings, paragraphs, and buttons.

Create new components inside a components folder.

Learn state with useState and props.

➤ Useful Links
Vite: https://vitejs.dev/

Tailwind CSS: https://tailwindcss.com/

React Docs: https://react.dev/learn
