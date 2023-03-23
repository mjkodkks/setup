---
layout: doc
---

### REF: 
[https://tailwindcss.com/docs/installation/play-cdn](https://tailwindcss.com/docs/installation/play-cdn)

[https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

How to add tailwindcss to web very easy like playground.

## Step 1 - add cdn to html
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

## Step 2 - add tailwind config
```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }
  </script>
</head>
<body>
  <h1 class="text-3xl font-bold underline text-clifford">
    Hello world!
  </h1>
</body>
</html>
```

## Step 3 - Add emptry tailwind.config.js 

Add emptry tailwind.config.js to root project for intellisense autocomplate.

[![image.png](https://i.postimg.cc/XvtTtWvm/image.png)](https://postimg.cc/v1Lq6pft)


## Step 4 - Add Tailwind CSS IntelliSense
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

