# QQBLOG 维护说明

这是以后维护博客时的快速入口。

## 目录在哪里

| 要做的事 | 文件或目录 |
| --- | --- |
| 新增或修改文章 | `src/data/blog/` |
| 修改网站名称、作者、描述、域名 | `src/config.ts` |
| 修改 GitHub、邮箱等社交链接 | `src/constants.ts` |
| 修改关于页面 | `src/pages/about.md` |
| 修改首页结构 | `src/pages/index.astro` |
| 放公共静态资源 | `public/` |
| 放文章或主题图片 | `src/assets/images/` |

## 新增文章

在 `src/data/blog/` 下新建一个 `.md` 文件，例如：

```text
src/data/blog/my-first-post.md
```

文章开头写 frontmatter：

```md
---
author: 言芊芊
pubDatetime: 2026-05-22T00:00:00Z
title: 我的第一篇文章
featured: false
draft: false
tags:
  - 随笔
description: 这是一篇文章摘要，会用于列表和 SEO。
---

这里开始写正文。
```

常用字段：

- `title`：文章标题，必填。
- `description`：文章摘要，必填。
- `pubDatetime`：发布时间，必填，建议使用 ISO 时间格式。
- `modDatetime`：修改时间，文章更新后再加。
- `tags`：标签列表。
- `draft: true`：草稿，不会正式发布。
- `featured: true`：在首页重点展示。
- `ogImage`：分享图，可以是图片路径或远程 URL。

## 本地预览

第一次打开项目后，先安装依赖：

```powershell
cd E:\Blog\QQBLOG
pnpm install
```

启动本地预览：

```powershell
pnpm run dev
```

浏览器打开：

```text
http://localhost:4321
```

如果电脑提示没有 `pnpm`，可以先用 npm：

```powershell
cd E:\Blog\QQBLOG
npm ci
npm run dev
```

## 发布流程

1. 在本地修改文章或配置。
2. 运行检查：

```powershell
pnpm run build
```

如果没有 `pnpm`，运行：

```powershell
npm run build
```

3. 打开 GitHub Desktop。
4. 确认改动列表。
5. 填写 Summary，例如 `Update blog content`。
6. 点击 `Commit to main`。
7. 点击 `Push origin`。
8. Vercel 会根据 GitHub 推送自动部署。

## 常见维护任务

### 改网站标题

编辑 `src/config.ts`：

```ts
title: "言芊芊のBlog",
desc: "言芊芊的astro paper博客",
author: "言芊芊",
```

### 改部署域名

编辑 `src/config.ts`：

```ts
website: "https://你的域名",
```

### 改社交链接

编辑 `src/constants.ts` 里的 `SOCIALS`。

当前仍有 AstroPaper 默认链接，例如原作者 GitHub、X、LinkedIn、邮箱。后续可以按你的真实账号清理。

## 当前整理记录

- 项目类型：Astro + AstroPaper。
- GitHub 远程仓库：`https://github.com/2725238326/QQBLOG.git`。
- 当前分支：`main`，跟踪 `origin/main`。
- 当前 README 仍是 AstroPaper 主题原始说明，所以本文件作为个人博客维护入口。
- 当前仓库同时存在 `pnpm-lock.yaml` 和 `package-lock.json`，后续确认 Vercel 使用的包管理器后再统一。
- 当前本机检测到 Node `v22.17.0` 和 npm `11.11.0`，暂未检测到全局 pnpm。
