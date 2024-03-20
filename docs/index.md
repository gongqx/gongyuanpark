---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Park"
  text: "Stay foolish, Stay hungry."
  tagline: 计划/实践/自由
  # image:
  #   src: /avatar.jpg
  #   alt: avatar
  actions:
    - theme: brand
      text: 进入主页
      link: /index
    - theme: alt
      text: 个人成长
      link: /views/aboutMe/introduce

features:
  - icon: 👨🏻‍💻
    title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
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

