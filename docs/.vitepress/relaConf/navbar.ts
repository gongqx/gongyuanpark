import { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '菩提树下',
    items: [
      {
        text: '读书笔记', link: '/views/underTree/read/'
      },
      {
        text: '随想录', link: '/views/underTree/randomThoughts/'
      },
      {
        text: 'api-examples', link: '/views/underTree/api-examples'
      },
      {
        text: 'markdown-examples', link: '/views/underTree/markdown-examples'
      },
    ]
  },
  {
    text: '超级计算',
    items: [
      {
        text: 'JavaScript', link: '/views/supercomputing/javascript/'
      },
      {
        text: 'Python', link: '/views/supercomputing/python/'
      },
      {
        text: 'Java', link: '/views/supercomputing/java/'
      },
      {
        text: 'Software', link: '/views/supercomputing/software/'
      }
    ]
  },
  {
    text: '板凳扁担',
    items: [
      {
        text: 'Vue',
        link: '/views/banchPole/vue/'
      },
      {
        text: 'React',
        link: '/views/banchPole/react/'
      },
    ]
  },
  {
    text: '数学之美',
    items: [
      {
        text: '加减乘除',
        link: '/views/mathematics/algorithm/'
      }
    ]
  }
]