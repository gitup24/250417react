render envoie App1. Le + gros composant
St'rinctMode permet App1
Lance : npm run dev
Edit src/App.jsx and save to test HMR

deploy on Githib Pages:
In package.json:
"predeploy": "npm run build",
    "deploy": "gh-pages -d dist"

npm install --save-dev gh-pages

in vite.config.js:
base: '/250417react/'

npm run deploy
