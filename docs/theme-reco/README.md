---
title: 博客markDown书写规则
date: 2020-05-29
showSponsor: true
---

# Markdown书写HTML和CSS案例
## 需要动态书写class 
例如：:class="$style.example"
<p class="demo" :class="$style.example">这个块是被内联的脚本渲染的，样式也采用了内联样式</p>

<style module lang='scss'>
.example {
  color: red;
}
</style>
```javascript
<p class="demo" :class="$style.example">这个块是被内联的脚本渲染的，样式也采用了内联样式</p>

<style module>
.example {
  color: red;
}
</style>

```
# config.js =》 sidebar相关问题
1. 在config.js 配置的sidebar的文件修改title需要重新npm run dev
2. config.js 配置的sidebar不运行有中文，有中文可以正常显示却无法点击对应的菜单