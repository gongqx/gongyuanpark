import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  // 菩提树下
  '/views/underTree/read': [
    {
      text: '读书笔记',
      items: [
        {
          text: '认知觉醒',
          link: '/views/underTree/read/cognitiveAwakening'
        }
      ]
    }
  ],
  '/views/underTree/randomThoughts': [
    {
      text: '随想录',
      items: [
        {
          text: 'ABCD',
          link: '/views/underTree/read/ABCD'
        }
      ]
    }
  ],
  // 超级计算
  '/views/supercomputing/javascript': [

  ],
  '/views/supercomputing/java': [

  ],
  '/views/supercomputing/python': [

  ],
  '/views/supercomputing/software': [
    {
      text: '《软件设计师教程》',
      items: [
        {
          text: '01_计算机系统知识',
          link: '/views/supercomputing/software/01_计算机系统知识'
        },
        {
          text: '02_程序设计语言基础知识',
          link: '/views/supercomputing/software/02_程序设计语言基础知识'
        }
      ]
    }
  ],
  // 板凳扁担
  '/views/banchPole/vue': [
    {
      text: 'vue2',
      items: [
        {
          text: '初始化项目',
          link: '/views/banchPole/vue/initialization'
        }
      ]
    },
  ],
  '/views/banchPole/react': [
    {
      text: 'React',
      items: [
        {
          text: '初始化项目',
          link: '/views/banchPole/react/initialization'
        }
      ]
    },
  ],
  // 数学之美
  '/views/mathematics/algorithm': [
    // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/views/mathematics/algorithm/001_stack'
        },
        {
          text: '队列-事件循环',
          link: '/views/mathematics/algorithm/002_queue'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/views/mathematics/algorithm/003_dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/views/mathematics/algorithm/004_tree'
        }
      ]
    }
  ],
  '/views/mathematics/textbook': [

  ]
};