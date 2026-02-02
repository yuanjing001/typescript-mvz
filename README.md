# TypeScript 初级交互教程

## 部署到 GitHub Pages

### 自动部署

本项目已配置 GitHub Actions 自动部署。每次推送到 `main` 分支时会自动构建并部署到 GitHub Pages。

### 配置步骤

1. 在 GitHub 仓库中，进入 **Settings** > **Pages**
2. 在 **Source** 部分，选择 **GitHub Actions**
3. 推送代码到 `main` 分支，GitHub Actions 会自动开始部署 
4. 部署完成后，访问 `https://<username>.github.io/<repo-name>/`

### 本地构建

```bash
# 开发模式
npm run dev

# 构建静态文件
npm run build

# 构建并准备部署
npm run deploy
```

### 注意事项
- 如果仓库名是 `username.github.io`，无需设置 `REPO_NAME` 环境变量
- 如果是其他仓库名，GitHub Actions 会自动设置正确的 basePath
- 构建产物在 `out` 目录中
