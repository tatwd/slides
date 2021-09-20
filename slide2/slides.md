---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
# YARP 初探

A toolkit for developing high-performance HTTP reverse proxy applications.

---
layout: intro
---


源码：[github.com/microsoft/reverse-proxy](https://github.com/microsoft/reverse-proxy)

官网：[microsoft.github.io/reverse-proxy/](https://microsoft.github.io/reverse-proxy/)

---

# 特点 

1. L7 代理
2. 基于 ASP.NET & .NET (.NET Core 3.1 and .NET 5.0)
3. Easily customized and tweaked via .NET code 
4. 多样配置管理（默认实现 appsetting.json 配置）
6. 复用了现有的 ASP.NET Core 中间件

<!-- <uim-rocket class="text-3xl text-orange-400" /> -->

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
右边的文字块
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

---

# Video 1: B 站视频

<Bilibili id="BV1tJ41167Ai" width="580" height="360"/>



<!-- --- 

# Video 2

<Youtube id="ojYEfRye6aE" width="580" height="360"/> -->