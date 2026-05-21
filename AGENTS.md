# AGENTS.md

本文件用于记录 QQBLOG 后续维护协作规则，作用范围为当前目录及所有子目录。

## Project Context

- 这是部署到 Vercel 的 AstroPaper 博客项目。
- GitHub 仓库为 `https://github.com/2725238326/QQBLOG.git`。
- 本地主要工作目录为 `E:\Blog\QQBLOG`。
- 博客文章位于 `src/data/blog/`。
- 站点基础信息位于 `src/config.ts`。
- 社交链接和分享入口位于 `src/constants.ts`。
- 静态公共资源位于 `public/`，文章相关图片可放在 `src/assets/images/` 或文章同级目录。

## Maintenance Rules

- 修改前先查看 `git status --short --branch`，避免覆盖用户已有改动。
- 不要使用 `git reset --hard`、`git checkout --` 等会丢弃改动的命令，除非用户明确要求。
- 优先保持 AstroPaper 现有目录结构和代码风格。
- 新增文章默认放在 `src/data/blog/`，需要分类 URL 时可放入子目录。
- 文章 frontmatter 至少包含 `title`、`description`、`pubDatetime`；常用字段还有 `author`、`tags`、`draft`、`featured`、`ogImage`。
- 发布前优先运行构建检查：`pnpm run build`。当前本机未检测到全局 pnpm，但 npm 可用；必要时使用 `npm ci` 和 `npm run build` 验证。
- 当前仓库同时存在 `pnpm-lock.yaml` 和 `package-lock.json`。未确认部署设置前，不要随意删除任一 lockfile。

## Common Commands

```powershell
cd E:\Blog\QQBLOG
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
pnpm run lint
pnpm run format
```

如果本机没有 pnpm，可使用 npm：

```powershell
cd E:\Blog\QQBLOG
npm ci
npm run dev
npm run build
npm run preview
```

## Deployment Notes

- Vercel 通常会在推送到 GitHub 后自动部署。
- 使用 GitHub Desktop 时，提交并 Push 到 `main` 后即可触发部署。
- 若部署失败，先检查 Vercel 构建日志，再在本地复现 `pnpm run build`。
