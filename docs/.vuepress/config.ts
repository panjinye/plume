/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: '荒野菲克',
      lang: 'zh-CN',
      description: '在路上的思绪与脚印',
    },
    '/en/': {
      title: 'Ficor',
      lang: 'en-US',
      description: 'On the Road',
    },
  },

  head: [
     // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: 'https://img.ficor.net/uploads/2026/02/699fdc546c33d.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

  theme: plumeTheme({
    /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
     hostname: 'https://mingchuan.net',

    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/theme/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/theme/#autofrontmatter
     */
     autoFrontmatter: {
       permalink: true,  // 是否生成永久链接
       createTime: true, // 是否生成创建时间
       title: true,      // 是否生成标题
     },

    /* 本地搜索, 默认启用 */
    search: false,

    /**
     * Algolia DocSearch
     * 启用此搜索需要将 本地搜索 search 设置为 false
     * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
     */
    // search: {
    //   provider: 'algolia',
    //   appId: '',
    //   apiKey: '',
    //   indices: [''],
    // },

    /**
     * Shiki 代码高亮
     * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
     */
     codeHighlighter: {
       twoslash: true, // 启用 twoslash
       whitespace: true, // 启用 空格/Tab 高亮
       lineNumbers: true, // 启用行号
     },

    /* 文章字数统计、阅读时间，设置为 false 则禁用 */
     readingTime: true,

    /**
     * markdown
     * @see https://theme-plume.vuejs.press/config/markdown/
     */
    markdown: {
      icon: { provider: 'iconify' },        // 启用内置图标语法  ::icon-name::
    },

    /**
     * 水印
     * @see https://theme-plume.vuejs.press/guide/features/watermark/
     */
    // watermark: true,

    /**
     * 评论 comments
     * @see https://theme-plume.vuejs.press/guide/features/comments/
     */
     comment: {
       provider: 'Twikoo', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
       comment: true,
       repo: 'https://twikoo.ficor.cc',
       repoId: '',
       category: '',
       categoryId: '',
       mapping: 'pathname',
       reactionsEnabled: true,
       inputPosition: 'top',
     },

    /**
     * 资源链接替换
     * @see https://theme-plume.vuejs.press/guide/features/replace-assets/
     */
    // replaceAssets: 'https://cdn.example.com',

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},

    /**
     * 启用 llmstxt 插件，用于为大语言模型提供更友好的内容
     * @see https://theme-plume.vuejs.press/guide/features/llmstxt/
     */
    // llmstxt: {
    //   locale: '/',    // 默认仅为主语言生成 llms 友好内容
    //   locale: 'all',  // 为所有语言生成 llms 友好内容
    // }
  }),
})
