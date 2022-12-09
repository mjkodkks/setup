---
layout: doc
---

### REF:
https://mui.com/material-ui/guides/interoperability/#setup

https://tailwindcss.com/docs/guides/vite

https://github.com/mjkodkks/boilerplate-vite-react


# Setup React App (TS) + Vite + MUI + tailwind
##  1) Create React App 
```sh
git clone https://github.com/mjkodkks/boilerplate-vite-react
```

## 2) Install MUI
```
npm install @mui/material @emotion/react @emotion/styled

or

yarn add @mui/material @emotion/react @emotion/styled
```

## 3) install tailwind
```
npm install -D tailwindcss postcss autoprefixer

or

yarn add -D tailwindcss postcss autoprefixer

```

### 3.1) config 
```
npx tailwindcss init -p
```
postcss.config.js
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

tailwind.config.js
```tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

index.css
```index.css (main css file in project)
/* @tailwind base; */
@tailwind components;
@tailwind utilities;
```