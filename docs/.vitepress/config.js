// .vitepress/config.js
export default {
  base: '/blossom-doc/',
  title: 'Blossom',
  description: 'Blossom 云端双链笔记软件,全权掌握,不再宕机。',
  lang: 'zh-CN',
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/blossom-doc/imgs/blossom/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/blossom-doc/imgs/blossom/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#779649' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_cn' }],
    ['meta', { name: 'og:site_name', content: 'Blossom' }],
  ],
  locales: {},

  themeConfig: {
    siteTitle: 'Blossom',
    logo: '/imgs/blossom/logo.svg',
    /*
     * 右侧文件索引
     */
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    /*
     * 右上角社交链接
     */
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/blossom-editor/blossom'
      },
      {
        icon: {
          svg: '<svg t="1700588863612" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22118" width="64" height="64"><path d="M 234.909 9.65619 a 80.4683 80.4683 0 0 1 68.398 0 a 167.374 167.374 0 0 1 41.8435 30.5779 l 160.937 140.82 H 621.156 L 782.093 40.2341 a 168.983 168.983 0 0 1 41.8435 -30.5779 a 80.4683 80.4683 0 0 1 107.023 66.7887 a 80.4683 80.4683 0 0 1 -17.703 53.9138 a 449.818 449.818 0 0 1 -35.406 32.1873 a 232.553 232.553 0 0 1 -22.5311 18.5077 h 100.585 a 170.593 170.593 0 0 1 118.288 53.1091 A 171.397 171.397 0 0 1 1128.11 352.451 v 462.693 a 325.897 325.897 0 0 1 -4.02342 70.0074 a 178.64 178.64 0 0 1 -80.4683 112.656 a 173.007 173.007 0 0 1 -92.5385 25.7499 H 212.377 a 341.186 341.186 0 0 1 -72.4215 -4.02342 a 177.835 177.835 0 0 1 -111.046 -80.4683 A 172.202 172.202 0 0 1 1.55049 846.526 V 388.662 A 360.498 360.498 0 0 1 1.55049 321.873 a 177.03 177.03 0 0 1 160.937 -143.234 h 105.413 c -16.8983 -12.0702 -31.3826 -26.5545 -46.6716 -39.4295 a 80.4683 80.4683 0 0 1 -25.7499 -65.984 A 80.4683 80.4683 0 0 1 234.909 9.65619 M 216.401 321.873 a 80.4683 80.4683 0 0 0 -63.5699 57.9372 a 108.632 108.632 0 0 0 0 30.5779 v 380.615 a 80.4683 80.4683 0 0 0 55.5231 80.4683 a 106.218 106.218 0 0 0 34.6014 5.63278 h 654.207 a 80.4683 80.4683 0 0 0 76.4449 -47.4763 a 112.656 112.656 0 0 0 8.04683 -53.1091 v -354.06 a 135.187 135.187 0 0 0 0 -38.6248 a 80.4683 80.4683 0 0 0 -52.3044 -54.7184 a 129.554 129.554 0 0 0 -49.8903 -7.24215 H 254.221 a 268.764 268.764 0 0 0 -37.8201 0 Z m 0 0" fill="#707070" p-id="22119" data-spm-anchor-id="a313x.search_index.0.i16.7c4e3a81HbvERG" class="selected"></path><path d="M 348.369 447.404 a 80.4683 80.4683 0 0 1 55.5231 18.5077 a 80.4683 80.4683 0 0 1 28.1639 59.5465 v 80.4683 a 80.4683 80.4683 0 0 1 -16.0937 51.4997 a 80.4683 80.4683 0 0 1 -131.968 -9.65619 a 104.609 104.609 0 0 1 -10.4609 -54.7184 v -80.4683 a 80.4683 80.4683 0 0 1 70.0074 -67.5934 Z m 416.021 0 a 80.4683 80.4683 0 0 1 86.1011 75.6402 v 80.4683 a 94.1479 94.1479 0 0 1 -12.0702 53.1091 a 80.4683 80.4683 0 0 1 -132.773 0 a 95.7573 95.7573 0 0 1 -12.8749 -57.1325 v -80.4683 a 80.4683 80.4683 0 0 1 70.0074 -70.8121 Z m 0 0" fill="#707070" p-id="22120" data-spm-anchor-id="a313x.search_index.0.i18.7c4e3a81HbvERG" class="selected"></path></svg>'
        },
        link: 'https://space.bilibili.com/8639471'
      }
    ],
    /*
     * 主题切换左侧的导航
     */
    nav: [
      {
        text: 'v1.9.0.dev',
        items: [
          { text: '更新日志', link: '/guide/changelog' },
          { text: '开发计划与进度', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' }
        ]
      },
      {
        text: '部署方式',
        items: [
          { text: '使用 Docker 公共镜像', link: '/guide/deploy/backend-docker' },
          { text: '使用 Docker Compose', link: '/guide/deploy/backend-docker-compose' },
          { text: 'Jar 包部署', link: '/guide/deploy/backend-jar' },
          { text: 'Idea 源码部署', link: '/guide/deploy/backend-idea' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '下载地址', link: '/guide/about/download' },
          { text: '源码仓库', link: 'https://github.com/blossom-editor/blossom' },
          { text: '源码仓库（国内）', link: 'https://gitee.com/blossom-editor/blossom' },
          { text: '博客样例', link: 'https://www.wangyunf.com/blossom/#/home' },
          { text: '接口 API 文档', link: '<a href="/guide/api/index.html" target="_self">Link to pure.html</a>' },
          {
            items: [
              { text: '博客', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20243' },
              { text: '加入群聊', link: '/guide/about/contact' }
            ]
          }
        ]
      },
      {
        text: '赞助',
        link: '/guide/about/sponsor'
      }
    ],
    /**
     * 左侧菜单
     */
    sidebar: [
      {
        text: '功能说明',
        items: [
          {
            text: '为什么使用 Blossom?',
            link: '/guide/why-is-blossom'
          },
          { text: '试用', link: '/guide/tryuse' },
          { text: '首页', link: '/guide/home' },
          { text: '📃 文章编辑', link: '/guide/article' },
          { text: '📑 Markdown 拓展', link: '/guide/markdown' },
          { text: '🏖️ 照片墙', link: '/guide/picture' },
          { text: '🏷️ 待办事项', link: '/guide/todo' },
          { text: '📅 计划安排', link: '/guide/plan' },
          { text: '🎫 便签', link: '/guide/note' },
          { text: '🛠️ 设置', link: '/guide/setting' }
        ]
      },
      {
        text: '使用三方',
        items: [{ text: '和风天气', link: '/guide/hefeng' }]
      },
      {
        text: '部署方式',
        items: [
          { text: '后台部署', link: '/guide/deploy/backend' },
          {
            items: [
              { text: '使用 Docker 公共镜像', link: '/guide/deploy/backend-docker' },
              { text: '使用 Docker Compose', link: '/guide/deploy/backend-docker-compose' },
              { text: 'Jar 包部署', link: '/guide/deploy/backend-jar' },
              { text: 'Idea 源码部署', link: '/guide/deploy/backend-idea' }
            ]
          },
          { text: '后台配置项', link: '/guide/deploy/backend-props' },
          { text: '博客/移动端页面部署', link: '/guide/deploy/blog' },
          { text: 'Mac OS 安装客户端', link: '/guide/deploy/macos' },
          { text: 'FAQ 常见问题', link: '/guide/deploy/faq' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '版本发布', link: '/guide/changelog' },
          { text: '开发计划', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' },
          {
            text: '❤ 项目与作者',
            link: '/guide/about/all'
          }
        ]
      }
    ],
    /**
     * 底部页脚
     */
    footer: {
      message: 'Blossom 官方文档',
      copyright: '在 MIT 许可下发布'
    },
    /**
     * 修改本页
     */
    editLink: {
      pattern: 'https://github.com/blossom-editor/blossom-document/edit/main/docs/:path',
      text: '在 Github 修改本页'
    },
    /**
     * 文档最后更新
     */
    lastUpdated: {
      text: '最近更新',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    /**
     * 文档的页脚
     */
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    /**
     * 广告
     */
    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },
    /**
     * 搜索
     */
    search: {
      // 使用本地搜索
      provider: 'local',
      options: {
        // 配置搜索组件展示文本
        translations: {
          button: {
            buttonText: '搜索'
          },
          modal: {
            displayDetails: '显示详情',
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除',
            footer: {
              closeText: '关闭',
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  },
  /**
   * markdown 配置, 使用 markdown-it
   */
  markdown: {
    // 默认显示行号
    lineNumbers: false,
    // 不写语言名时，默认识别为js
    defaultHighlightLang: 'shell'
  }
}
