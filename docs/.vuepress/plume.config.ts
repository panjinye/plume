/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改不会重启 vuepress 服务，而是通过热更新的方式生效
 * 但同时部分配置项不支持热更新，请查看文档说明
 * 对于不支持热更新的配置项，请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会覆盖 `.vuepress/config.ts` 文件中的配置
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import { enCollections, zhCollections } from './collections'
import { enNavbar, zhNavbar } from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/theme/
 */
export default defineThemeConfig({
  logo: 'https://img.ficor.net/uploads/2026/02/699fdc546c33d.png',

  appearance: true,  // 配置 深色模式

  social: [
    { icon: 'github', link: 'https://github.com/ficorcc' },
    { icon: 'ri:mail-line', link: 'mailto:ficor@ficor.com' },
    { icon: 'wechat', link: 'https://theme-plume.vuejs.press/wechat.jpg' },
    { icon: 'mastodon', link: 'https://mastodon.social/@ficor' },
  ],
  navbarSocialInclude: ['github', 'ri:mail-line', 'wechat', 'mastodon'], // 允许显示在导航栏的 social 社交链接
  aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: '2008 - 2026 © 荒野菲克',
  }, // ✅ 关键修复：取消注释，补全 footer 对象的闭合大括号

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/theme/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },
  sidebar: {
    '/typescript/': [
      'basic',
      'types'
    ],
    '/rust/': [
      'tuple',
      'struct'
    ]
  },
  locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/theme/#profile
       */
      profile: {
        avatar: 'https://img.ficor.net/uploads/2026/02/699fdc546c33d.png',
        name: '荒野菲克',
        description: '在路上的思绪与脚印',
        circle: true,
        location: '中国 山东',
        // organization: '',
      },

      navbar: zhNavbar,
      collections: zhCollections,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
      // bulletin: {
        // layout: 'top-right',
        // contentType: 'markdown',
        // title: '公告',
        // content: '当你把历史的包袱放下，你就可以更好的拥抱未来',
      // },
    },
    '/en/': {
      /**
       * @see https://theme-plume.vuejs.press/config/theme/#profile
       */
      profile: {
        avatar: 'https://img.ficor.net/uploads/2026/02/699fdc546c33d.png',
        name: 'Ficor',
        description: 'On the Road',
        circle: true,
        location: 'China Shandong',
        // organization: '',
      },

      navbar: enNavbar,
      collections: enCollections,

      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
      // bulletin: {
        // layout: 'top-right',
        // contentType: 'markdown',
        // title: '公告',
        // content: '当你把历史的包袱放下，你就可以更好的拥抱未来',
      //},
    },
  },
})