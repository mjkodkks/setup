---
layout: doc
---

### REF: 
[https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants)

[https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state)


## Tailwindcss : How To Have A Hover Effect On Children When Parent Is Hovered

Some use case of tailwindcss i try to set some style to chilren element along with hover parent

Like this
```html
<button class="parent border hover:border-red-300">
    <div>
        <div>some text1</div>
        <div>some text2</div>
    </div>
</button>
```

And i want to add color to "some text2" when i hover parent. how to do ?


And i found arbitray in tailwindcss can do this
```html
<button class="parent border hover:border-red-300 [&_.text-change]:hover:text-red-400">
    <div>
        <div>some text1</div>
        <div class="text-change">some text2</div>
    </div>
</button>
```

this syntax ```[&_.text-change]:hover:text-red-400``` can access to .text-change in nested element when i hover.

And you can do some complex logic

I collect use case to use in tailwind playground if you interest :)
https://play.tailwindcss.com/p8q2r3hght

Yeah buttttttt it this so complex way @_@

and I found this link https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state

for easy way to do this ;D

```html
<a href="#" class="group">
  <div>
    <svg class="group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="group-hover:text-white">New project</h3>
  </div>
  <p class="group-hover:text-white">Create a new project from a variety of starting templates.</p>
</a>
```

1) use class ```group``` to parent 

   for class ```group-*``` ```*``` mean any state you need to combind example ```hover:```

2) then use ```group-hover:**``` to children 

    ```**``` mean tailwind utility class such as ```text-white``` ```stroke-white```

3) done ...

happy to code :3