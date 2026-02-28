# VuePress Theme Plume 博客项目

![VuePress](https://img.shields.io/badge/VuePress-2.0.0--rc.26-blue.svg)
![VuePress Theme Plume](https://img.shields.io/badge/Theme-Plume-1.0.0--rc.191-green.svg)
![VuePress Theme Plume](https://theme-plume.vuejs.press/)
![原版在这里](https://github.com/pengzhanbo/vuepress-theme-plume)
这是一个基于 VuePress 2.0 和 Plume 主题搭建的个人博客项目，包含中文和英文两个版本。

## 项目结构

```
├── docs/                  # 网站内容目录
│   ├── .vuepress/         # VuePress 配置目录
│   │   ├── public/        # 静态资源目录
│   │   ├── theme/         # 主题自定义目录
│   │   ├── client.ts      # 客户端配置
│   │   ├── collections.ts # 内容集合配置
│   │   ├── config.ts      # VuePress 配置
│   │   ├── navbar.ts      # 导航栏配置
│   │   └── plume.config.ts # Plume 主题配置
│   ├── blog/              # 博客文章目录
│   │   ├── 文章/           # 文章分类
│   │   └── 旅行/           # 旅行分类
│   ├── demo/              # 示例内容目录
│   ├── en/                # 英文版本内容
│   ├── README.md          # 首页内容
│   └── friends.md         # 友链页面
├── package.json           # 项目配置和依赖
├── README.md              # 项目说明
├── README.zh-CN.md        # 中文项目说明
└── vercel.json            # Vercel 部署配置
```

## 功能特点

- **响应式设计**：适配各种屏幕尺寸
- **深色模式**：支持自动切换和手动切换
- **多语言支持**：包含中文和英文两个版本
- **博客功能**：支持文章分类、标签、归档
- **友链功能**：支持添加和展示友情链接
- **社交链接**：集成 GitHub、邮箱、微信等社交平台
- **评论系统**：集成 Twikoo 评论系统
- **搜索功能**：支持本地搜索
- **代码高亮**：支持多种编程语言的代码高亮
- **数学公式**：支持 KaTeX 数学公式
- **图表功能**：支持 Chart.js、ECharts、Mermaid 等图表库

## 安装说明

### 前置条件

- Node.js >= 20.19.0 或 >= 22.0.0
- pnpm >= 10.0.0

### 安装步骤

1. 克隆项目

```bash
git clone <repository-url>
cd <project-directory>
```

2. 安装依赖

```bash
pnpm install
```

3. 启动开发服务器

```bash
pnpm docs:dev
```

4. 构建生产版本

```bash
pnpm docs:build
```

5. 预览生产版本

```bash
pnpm docs:preview
```

## 配置说明

### 主题配置

主题配置文件位于 `docs/.vuepress/plume.config.ts`，包含以下主要配置项：

- `logo`：网站 logo
- `appearance`：深色模式配置
- `social`：社交链接配置
- `navbarSocialInclude`：导航栏显示的社交链接
- `footer`：页脚配置
- `locales`：多语言配置

### 导航栏配置

导航栏配置文件位于 `docs/.vuepress/navbar.ts`，包含中文和英文两个版本的导航栏配置。

### 内容集合配置

内容集合配置文件位于 `docs/.vuepress/collections.ts`，用于配置博客文章的组织方式。

## 内容管理

### 博客文章

博客文章位于 `docs/blog/` 目录下，按分类组织。每篇文章需要添加 frontmatter 配置，例如：

```yaml
---
title: 文章标题
date: 2026-02-28
description: 文章描述
categories: [分类1, 分类2]
tags: [标签1, 标签2]
---
```

### 友链管理

友链配置位于 `docs/friends.md` 和 `docs/en/friends.md` 文件中，使用 YAML 格式配置友链列表。

## 部署说明

项目支持部署到 Vercel、GitHub Pages、Netlify 等平台。

### Vercel 部署

1. 登录 Vercel 账号
2. 导入项目仓库
3. 配置构建命令：`pnpm docs:build`
4. 配置输出目录：`docs/.vuepress/dist`
5. 点击部署按钮

### GitHub Pages 部署

1. 构建生产版本：`pnpm docs:build`
2. 将 `docs/.vuepress/dist` 目录的内容推送到 `gh-pages` 分支
3. 在仓库设置中启用 GitHub Pages，选择 `gh-pages` 分支

## 开发指南

### 添加新文章

1. 在 `docs/blog/` 目录下创建新的 markdown 文件
2. 添加 frontmatter 配置
3. 编写文章内容
4. 启动开发服务器查看效果

### 自定义主题

可以在 `docs/.vuepress/theme/` 目录下自定义主题组件和样式。

## 依赖说明

项目使用以下主要依赖：

- VuePress 2.0.0-rc.26
- VuePress Theme Plume 1.0.0-rc.191
- TypeScript 5.9.3
- Vue 3.5.26

## 许可证

MIT

## 联系方式

- GitHub：[https://github.com/ficorcc](https://github.com/ficorcc)
- 邮箱：[ficor@ficor.com](mailto:ficor@ficor.com)
