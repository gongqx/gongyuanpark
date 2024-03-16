import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: 'Examples', link: '/markdown-examples' },
  {
    text: "个人成长", items: [
      {
        text: "软件设计师教程", link: "/views/ruankao/softwareDesigner"
      },
      {
        text: "软考基础知识", link: "/views/ruankao/basicKnowledge"
      }
    ]
  },
  {
    text: "关于我", items: [
      {
        text: "自我介绍", link: "/views/aboutMe/introduce"
      },
      {
        text: "想象之岛", link: "/views/aboutMe/imagineIsland"
      }
    ]
  },
  {
    text: "前端开发",
    items: [
      {
        text: '数据结构与算法',
        link: '/views/frontEnd/Algorithm/index'
      }
    ]
  }
]