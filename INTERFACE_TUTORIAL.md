# TypeScript Interface 教程文档

## 概述
本次为 TypeScript 教程网站添加了一篇全新的 Interface（接口）教程文档。

## 新增内容

### 1. 页面文件
- **文件路径**: `src/pages/interface.tsx`
- **页面路由**: `/interface`
- **文件大小**: 3.7 kB (构建后 191 kB)

### 2. 代码片段
在 `src/lib/snippets.ts` 中添加了 20+ 个代码示例，包括：
- `ifBasic` - 基础接口定义
- `ifExtends` - 接口扩展
- `ifOptional` - 可选属性
- `ifReadonly` - 只读属性
- `ifFunction` - 函数类型
- `ifIndexSignature` - 索引签名
- `ifMerging` - 声明合并
- `ifImplements` - 类实现接口
- `ifGeneric` - 泛型接口
- 等等...

### 3. 文章配置
在 `src/lib/articles.ts` 中添加了新文章配置：
```typescript
interface: {
  title: 'TypeScript 接口完全指南',
  date: DateTime.fromISO('2024-06-18T12:00:00Z'),
  description: '深入理解 TypeScript 接口的核心概念和实战应用',
  ogImage: 'generics'
}
```

## 教程内容结构

### 主要章节
1. **什么是接口？** - 介绍接口的基本概念
2. **接口 vs 类型别名** - 对比两者的异同
3. **接口扩展** - 学习如何扩展接口
4. **可选属性** - 使用 `?` 标记可选属性
5. **只读属性** - 使用 `readonly` 关键字
6. **函数类型** - 在接口中定义函数
7. **索引签名** - 处理动态属性
8. **声明合并** - 接口的独特特性
9. **实现接口** - 类如何实现接口
10. **接口与泛型** - 创建泛型接口
11. **实战建议** - 何时使用接口 vs 类型别名
12. **总结** - 回顾核心概念

### 特色功能
- ✅ 交互式代码示例（可编译和运行）
- ✅ 错误示例演示
- ✅ 实战建议和最佳实践
- ✅ 与现有教程风格保持一致
- ✅ 完整的中文内容
- ✅ 移动端友好的代码格式

## 技术细节

### 编译状态
- ✅ TypeScript 编译通过
- ✅ 无诊断错误
- ✅ Prettier 格式化完成
- ✅ Next.js 构建成功
- ✅ 静态页面导出成功

### 文件状态
- `src/pages/interface.tsx` - 已创建
- `src/lib/snippets.ts` - 已更新（添加接口相关代码片段）
- `src/lib/articles.ts` - 已更新（添加文章配置）
- `out/interface/index.html` - 已生成

## 访问方式
构建完成后，可以通过以下方式访问：
- 开发环境: `http://localhost:3000/interface`
- 生产环境: `https://your-domain.com/interface`

## 与现有教程的关系
本教程补充了现有的两篇教程：
1. **Todo 教程** - 介绍 TypeScript 基础类型
2. **泛型教程** - 介绍泛型概念
3. **Interface 教程** (新增) - 深入讲解接口

三篇教程共同构成了完整的 TypeScript 入门体系。

## 后续建议
1. 可以考虑为 interface 教程创建专属的 OG 图片
2. 可以在首页添加教程之间的关联推荐
3. 可以添加更多实战案例（如 React 组件接口定义）
