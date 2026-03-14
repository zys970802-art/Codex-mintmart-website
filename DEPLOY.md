# MintMart Next.js 部署指南（前后端分离 · 轻后端）

## 1) 环境准备
- 安装 Node.js 20+（自带 npm）。
- 可选：安装 pnpm/yarn，本文以 npm 为例。

## 2) 安全配置
1. 复制环境变量模板：
   ```bash
   cp .env.example .env
   ```
2. 将 OpenAI Key 写入 `.env`（仅服务器侧读取）：
   ```env
   OPENAI_API_KEY=sk-xxxx
   ```
   - Key 只存在后端，前端不会打包；API 路由在服务器侧请求 OpenAI。

## 3) 本地开发
```bash
npm install
npm run dev
# 浏览 http://localhost:3000
```

## 4) 生产构建 & 启动
```bash
npm run build
npm start
# 默认 3000 端口，可通过 PORT 环境变量覆盖
```

## 5) 部署（Vercel 推荐）
1. 选择 **Import Git Repository**。
2. Framework 选择 **Next.js**（App Router）。
3. 添加环境变量 `OPENAI_API_KEY`。
4. 构建命令：`npm run build`；输出目录：`.next`（默认即可）。

### 其他平台
- Docker：在根目录添加 Dockerfile，构建时复制 `.env` 或通过平台 Secret 注入；暴露 3000 端口。
- 静态托管不可用（需 Node 运行 API 路由）。

## 6) 目录说明
- `app/page.tsx`：首页 + 所有版块 React 组件。
- `app/api/ai/route.ts`：后端轻服务，代理调用 OpenAI（仅服务器读取 Key）。
- `app/globals.css`：全局视觉样式（淡蓝科技风、玻璃卡片、响应式）。
- `package.json`：Next 16 / React 19 依赖与脚本。

## 7) 验收要点
- 导航与版块顺序符合文档；中文文案与颜色规范一致。
- 表单提交命中 `/api/ai`，前端不暴露 Key；返回一句中文跟进话术。
- 移动端导航可折叠；1440/1280/1024/768/375 下无溢出。
- 无阻塞脚本，首屏轻量；未启用暗色。

如需 CI/CD：在流水线中执行 `npm ci && npm run build`，将 `.env` 以环境变量方式注入，禁止将 Key 写入仓库。
