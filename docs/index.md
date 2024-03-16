---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "宫垣的公园"
  text: "Stay foolish, Stay hungry."
  tagline: 计划/想象/自由
  image:
    src: /avatar.jpg
    alt: avatar
  actions:
    - theme: brand
      text: 进入主页
      link: /index
    - theme: alt
      text: 个人成长
      link: /views/aboutMe/introduce

features:
  - icon: 👨🏻‍💻
    title: web前端
    details: 小厂程序猿，忙着搬砖。
    link: /views/aboutMe/introduce
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit

lastUpdated: true
---

<script setup>
  import home from './components/home.vue';
</script>

<home />

