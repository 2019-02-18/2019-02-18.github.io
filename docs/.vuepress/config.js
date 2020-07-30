module.exports = {
    title: '刘志伟',
    serviceWorker: true,
	theme: 'antdocs',
    head: [
        ['link', { rel: 'icon', href: '/logo2.png' }]
    ],
    markdown: {
      // 显示代码行号
      lineNumbers: false
    },
    themeConfig: {
        logo:"/logo2.png",
        nav: [
          { text: '首页', link: '/' },
          { text: '技术', items: [
                  {text:'Vue',link:'/vue/'},
                  {text:'Uniapp',link:'/uniapp/'},
                  {text:'Git',link:'/git/'},
                  {text:'Npm',link:'/npm/'}
              ]},
          { text: '生活',link: '/life/' },
          { text: '思考',link: '/ponder/'},
          { text: '标签库', link: '/tags/' },
          { text: '关于', link: '/about/'},
          { text: '留言板', link: '/massage/'},
          { text: '链接',
            items: [
                {text:'GitHub',link: 'https://github.com/2019-02-18' },
            ]
          }
        ],
        lastUpdated: 'Last Updated',
      }
  }
