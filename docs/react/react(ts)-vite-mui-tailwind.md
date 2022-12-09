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
```sh
npm install @mui/material @emotion/react @emotion/styled

or

yarn add @mui/material @emotion/react @emotion/styled
```

## 3) install tailwind
```sh
npm install -D tailwindcss postcss autoprefixer

or

yarn add -D tailwindcss postcss autoprefixer

```

### 3.1) config 
```sh
npx tailwindcss init -p
```
postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

tailwind.config.js
```js
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

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div data-js="root" id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

index.css (main css file in project)
```css
/* @tailwind base; */
@tailwind components;
@tailwind utilities;
```