---
layout: doc
---

### REF: 
[https://tailwindcss.com/docs/installation/play-cdn](https://tailwindcss.com/docs/installation/play-cdn)

[https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

Add tailwindcss to simple web very easy.

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

![preview](https://data.terabox.com/thumbnail/4aed442de7ed3d3a0708daaf4f65a172?fid=4400809366918-250528-181960798963154&time=1676883600&rt=sh&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-FaqWjyYTrR4ig3MGoXk8lvDZhzM%3D&expires=8h&chkv=0&chkbd=0&chkpc=&dp-logid=23679093422084731&dp-callid=0&size=c1600_u1600&quality=100&vuk=-&ft=video)


## Step 4 - Add Tailwind CSS IntelliSense
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

