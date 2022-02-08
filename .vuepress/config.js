module.exports = {
  "title": "MR_FBZ博客",
  "description": "专注技术和探索",
  "dest": "public",
  "base": "/my-blog/",
  "head": [
    // 网页标签栏图标
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    // 移动栏优化
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  "theme": "reco",
  "locales": {
    '/': {
      lang: 'zh-CN'
    },
    // '/en/': {
    //   lang: 'en-US'
    // }
  },
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "杂记",
        "icon": "reco-message",
        "items": [
          {
            "text": "博客编写相关",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      //   {
      //     "text": "Contact",
      //     "icon": "reco-message",
      //     "items": [
      //       {
      //         "text": "GitHub",
      //         "link": "https://github.com/recoluan",
      //         "icon": "reco-github"
      //       }
      //     ]
      //   }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "lastUpdated": "Last Updated",
    "author": "MR_FBZ",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
    // markdown-it-anchor 的选项
    // anchor: { permalink: false },
    // // markdown-it-toc 的选项
    // toc: { includeLevel: [1, 2] },
    // extendMarkdown: md => {
    //   // 使用更多的 markdown-it 插件!
    //   md.use(require('markdown-it-xxx'))
    // }
  },
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features'); // 解决第三方ui插件问题
  },
  "plugins": [
    "vuepress-plugin-cat", // 动画猫
    ['one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '恭喜您，复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time
      }
    ], // 复制代码插件
    [
      'ribbon',
      {
        size: 90, // width of the ribbon, default: 90
        opacity: 0.3, // opacity of the ribbon, default: 0.3
        zIndex: -1, // z-index property of the background, default: -1
      },
    ],// 彩色带
    [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/sponsor-qrcode/qrcode-alipay.png',
        wechat: '/sponsor-qrcode/qrcode-wechat.png',
        qq: '/sponsor-qrcode/qrcode-qq.png',
        // paypal: 'https://www.paypal.me/yokefellow',
        duration: 2000
      }
    ], // 打赏
    // 'splitting',
    ['demo-container-v2'], // 代码展示插件
    '@vuepress-reco/extract-code', //代码展示插件
    [
      '@vuepress-reco/comments',
      {
        solution: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          appId: '0VGEDDSLaJMlEw8gRQl7Rl6U-gzGzoHsz',
          appKey: 'pk9HqaijIJtYdFHHuRpzSrvB'
        }
      }
    ]
  ],
}