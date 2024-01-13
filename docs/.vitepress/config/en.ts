export const en = {
  description: 'Blossom ',
  themeConfig: {
    /*
     * 右侧文件索引
     */
    outline: {
      level: 'deep'
    },
    /*
     * 主题切换左侧的导航
     */
    nav: [
      {
        text: 'Online Demo',
        link: 'https://www.wangyunf.com/blossom-demo/#/settingindex'
      },
      {
        text: 'v1.12.0',
        items: [
          { text: '更新日志', link: '/en/guide/changelog' },
          { text: '开发计划与进度', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' },
          { text: '升级至 1.12.0', link: '/en/guide/deploy/breakchange-1-12-0' }
        ]
      },
      {
        text: 'Deployment',
        items: [
          { text: '使用 Docker 公共镜像', link: '/en/guide/deploy/backend-docker' },
          { text: '使用 Docker Compose', link: '/en/guide/deploy/backend-docker-compose' },
          { text: 'Jar 包部署', link: '/en/guide/deploy/backend-jar' },
          { text: 'Idea 源码部署', link: '/en/guide/deploy/backend-idea' },
          { text: '更多教程(Nas)', link: '/en/guide/deploy/backend-other' },
          {
            items: [{ text: '客户端部署', link: '/en/guide/deploy/client' }]
          },
          {
            items: [{ text: '博客部署', link: '/en/guide/deploy/blog' }]
          }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Download', link: '/en/guide/about/download' },
          { text: 'Github', link: 'https://github.com/blossom-editor/blossom' },
          { text: 'Blog Demo', link: 'https://www.wangyunf.com/blossom/#/home' },
          { text: 'API', link: 'https://github.com/blossom-editor/blossom/tree/dev/doc/backend-api' },
          {
            items: [
              { text: 'Chinese blog', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20243' },
              { text: 'Sponsors', link: '/en/guide/about/sponsor-list' },
              { text: 'Join us', link: '/en/guide/about/contact' }
            ]
          }
        ]
      },
      {
        text: 'Sponsor',
        link: '/guide/about/sponsor'
      }
    ],
    /**
     * 左侧菜单
     */
    sidebar: [
      {
        text: 'Features',
        items: [
          {
            text: 'Why Blossom?',
            link: '/en/guide/why-is-blossom'
          },
          { text: 'Deme Trial', link: '/en/guide/tryuse' },
          { text: 'Home', link: '/en/guide/home' },
          { text: '📃 Editor', link: '/en/guide/article' },
          { text: '📑 Markdown Expansion', link: '/en/guide/markdown' },
          { text: '🏖️ File', link: '/en/guide/picture' },
          { text: '🏷️ Todo List', link: '/en/guide/todo' },
          { text: '📅 Plan', link: '/en/guide/plan' },
          { text: '🎫 Note', link: '/en/guide/note' },
          { text: '🛠️ Setting', link: '/en/guide/setting' }
        ]
      },
      {
        text: 'Tripartite Service',
        items: [{ text: 'Qweather', link: '/en/guide/hefeng' }]
      },
      {
        text: 'How to deploy?',
        items: [
          { text: '所有部署方式', link: '/en/guide/deploy/backend' },
          {
            items: [
              { text: '使用 Docker 公共镜像', link: '/en/guide/deploy/backend-docker' },
              { text: '使用 Docker Compose', link: '/en/guide/deploy/backend-docker-compose' },
              { text: 'Jar 包部署', link: '/en/guide/deploy/backend-jar' },
              // { text: 'Idea 源码部署', link: '/guide/deploy/backend-idea' },
              { text: '后台配置项', link: '/en/guide/deploy/backend-props' }
            ]
          },
          { text: '网页客户端部署', link: '/en/guide/deploy/client' },
          { text: '博客/移动端页面部署', link: '/en/guide/deploy/blog' },
          { text: 'Mac OS 安装客户端', link: '/en/guide/deploy/macos' },
          { text: 'FAQ 常见问题', link: '/en/guide/deploy/faq' }
        ]
      },
      {
        text: 'Other',
        items: [
          { text: '版本发布', link: '/en/guide/changelog' },
          { text: '开发计划', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' },
          {
            text: '❤ 项目与作者',
            link: '/en/guide/about/all'
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
      pattern: 'https://github.com/blossom-editor/blossom-document/edit/main/docs/:path'
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
     * Search
     */
    search: {
      provider: 'local'
    }
  }
}
