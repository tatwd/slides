# 讲演稿

测算下！

---

# Page 2

Directly use code blocks for highlighting

```csharp {2}
System.Console.WriteLine("Hello!");
System.Console.WriteLine("World!");
```

<uim-rocket class="text-3xl text-orange-400 animate-ping" />

---

# Page 3

You can directly use Windi CSS and Vue components to style and enrich your slides.


---
layout: two-cols
preload: false
---

# Left

This shows on the left

<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>

::right::

# Right

<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  
<div>
This shows on the right
</div>



```ts {all|2|1-6|9|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = {...user, ...update}  
  saveUser(id, newUser)
}
```

</div>
