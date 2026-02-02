const path = require('path')

// GitHub Pages 部署时需要设置 basePath 和 assetPrefix
// 如果仓库名是 username.github.io，则留空
// 如果是其他仓库名，设置为 '/仓库名'
const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.REPO_NAME || '' // 从环境变量读取仓库名

const config = {
  webpack(config) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      src: path.resolve(__dirname, 'src')
    })

    return config
  },
  exportTrailingSlash: true,
  // GitHub Pages 配置
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // GitHub Pages 不支持 Next.js 图片优化
  }
}

module.exports = config
