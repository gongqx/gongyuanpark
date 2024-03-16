import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  // /views/frontEnd/Algorithm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/views/frontEnd/Algorithm/': [
    // 第一部分
    {
      text: '栈和队列',
      items: [
        {
          text: '栈-深拷贝和浅拷贝',
          link: '/views/frontEnd/Algorithm/001_stack'
        },
        {
          text: '队列-事件循环',
          link: '/views/frontEnd/Algorithm/002_queue'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '字典和集合-Set和Map',
          link: '/views/frontEnd/Algorithm/003_dictionary'
        },
        {
          text: '树-深/广度优先遍历',
          link: '/views/frontEnd/Algorithm/004_tree'
        }
      ]
    }
  ]
};