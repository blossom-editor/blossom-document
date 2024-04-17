export const zh = {
  description: 'Blossom 云端双链笔记软件,全权掌握,不再宕机。',
  themeConfig: {
    /*
     * 右侧文件索引
     */
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    /*
     * 主题切换左侧的导航
     */
    nav: [
      {
        text: '在线客户端',
        link: 'https://www.wangyunf.com/blossom-demo/#/settingindex'
      },
      {
        text: 'v1.16.0',
        items: [
          { text: '更新日志', link: '/guide/changelog' },
          { text: '开发计划与进度', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' },
          { text: '从 1.12.0 版本之前升级', link: '/guide/deploy/breakchange-1-12-0' }
        ]
      },
      {
        text: '部署方式',
        items: [
          { text: '使用 Docker 公共镜像', link: '/guide/deploy/backend-docker' },
          { text: '使用 Docker Compose', link: '/guide/deploy/backend-docker-compose' },
          { text: 'Jar 包部署', link: '/guide/deploy/backend-jar' },
          { text: 'Idea 源码部署', link: '/guide/deploy/backend-idea' },
          { text: '更多教程(Nas)', link: '/guide/deploy/backend-other' },
          {
            items: [{ text: '客户端部署', link: '/guide/deploy/client' }]
          },
          {
            items: [{ text: '博客部署', link: '/guide/deploy/blog' }]
          }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '下载地址', link: '/guide/about/download' },
          { text: '源码仓库', link: 'https://github.com/blossom-editor/blossom' },
          { text: '源码仓库（国内）', link: 'https://gitee.com/blossom-editor/blossom' },
          { text: '博客样例', link: 'https://www.wangyunf.com/blossom/#/home' },
          { text: '接口 API 文档', link: 'https://github.com/blossom-editor/blossom/tree/dev/doc/backend-api' },
          {
            items: [
              { text: '博客', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20243' },
              { text: '赞助者们', link: '/guide/about/sponsor-list' },
              { text: '项目成员', link: '/guide/about/team' },
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
        text: '如何部署？',
        items: [
          { text: '所有部署方式', link: '/guide/deploy/backend' },
          {
            items: [
              { text: '使用 Docker 公共镜像', link: '/guide/deploy/backend-docker' },
              { text: '使用 Docker Compose', link: '/guide/deploy/backend-docker-compose' },
              { text: 'Jar 包部署', link: '/guide/deploy/backend-jar' },
              // { text: 'Idea 源码部署', link: '/guide/deploy/backend-idea' },
              { text: '后台配置项', link: '/guide/deploy/backend-props' },
              { text: '更多教程(Nas)', link: '/guide/deploy/backend-other' }
            ]
          },
          { text: '网页客户端部署', link: '/guide/deploy/client' },
          { text: '博客/移动端页面部署', link: '/guide/deploy/blog' },
          { text: 'Mac OS 安装客户端', link: '/guide/deploy/macos' },
          { text: '数据迁移', link: '/guide/deploy/data-migration' },
          { text: 'FAQ 常见问题', link: '/guide/deploy/faq' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '版本发布', link: '/guide/changelog' },
          { text: '开发计划', link: 'https://www.wangyunf.com/blossom/#/articles?articleId=20156' },
          // { text: '项目成员', link: '/guide/about/team' },
          { text: '❤ 项目赞助', link: '/guide/about/all' }
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
  }
}
