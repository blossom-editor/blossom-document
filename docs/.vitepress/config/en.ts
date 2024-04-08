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
        text: 'v1.14.0',
        items: [
          { text: 'Change Log', link: '/en/guide/changelog' },
          { text: 'Development Log', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' },
          { text: 'Upgrade from before 1.12.0', link: '/en/guide/deploy/breakchange-1-12-0' }
        ]
      },
      {
        text: 'Deployment',
        items: [
          { text: 'Docker Image', link: '/en/guide/deploy/backend-docker' },
          { text: 'Docker Compose', link: '/en/guide/deploy/backend-docker-compose' },
          { text: 'Jar Package ', link: '/en/guide/deploy/backend-jar' },
          { text: 'Idea Plugin', link: '/en/guide/deploy/backend-idea' },
          { text: 'More', link: '/en/guide/deploy/backend-other' },
          {
            items: [{ text: 'Deploy Client', link: '/en/guide/deploy/client' }]
          },
          {
            items: [{ text: 'Deploy Blog', link: '/en/guide/deploy/blog' }]
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
              { text: 'Our Team', link: '/en/guide/about/team' },
              { text: 'Join us', link: '/en/guide/about/contact' }
            ]
          }
        ]
      },
      {
        text: 'Sponsor',
        link: '/en/guide/about/sponsor'
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
          { text: 'Backend', link: '/en/guide/deploy/backend' },
          {
            items: [
              { text: 'Docker Image', link: '/en/guide/deploy/backend-docker' },
              { text: 'Docker Compose', link: '/en/guide/deploy/backend-docker-compose' },
              { text: 'Jar Plackage', link: '/en/guide/deploy/backend-jar' },
              // { text: 'Idea 源码部署', link: '/guide/deploy/backend-idea' },
              { text: 'Configuration ', link: '/en/guide/deploy/backend-props' }
            ]
          },
          { text: 'Client', link: '/en/guide/deploy/client' },
          { text: 'Blog', link: '/en/guide/deploy/blog' },
          { text: 'How to work on MacOS', link: '/en/guide/deploy/macos' },
          { text: 'FAQ', link: '/en/guide/deploy/faq' }
        ]
      },
      {
        text: 'Other',
        items: [
          { text: 'Change Log', link: '/en/guide/changelog' },
          { text: 'Development Log', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' },
          {
            text: '❤ About',
            link: '/en/guide/about/all'
          }
        ]
      }
    ],
    /**
     * 底部页脚
     */
    footer: {
      message: 'Blossom Document',
      copyright: 'Released MIT license'
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
