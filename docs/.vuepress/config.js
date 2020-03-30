module.exports = {
    base: '/waipo/',     // 仓库名字是press
    title: '外婆王占才女士',
    description: ' 世界上只有一种真正的英雄主义,那就是认清生活真相依旧热爱生活。-罗曼·罗兰Romain Rolland',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    // 主题配置
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            items: [
              { text: 'Chinese', link: '/language/chinese' },
              { text: 'English', link: '/language/english' }
            ]
          },
          { text: 'External', link: 'https://www.baidu.com' },
        ]
    },
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: ['/guide/']
      }         
    ],
    themeConfig: {}
}

