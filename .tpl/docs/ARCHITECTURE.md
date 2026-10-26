# 架构

React / Next.js 纯前端，feature-based。品牌上下文 host.tsx 与数据 data.ts 分离，主题 theme.css 集中管理字体、颜色、间距、玻璃卡片及响应式。Shell 管理站内 Next Link、语言路径与页脚。Modal 负责焦点循环、Escape、滚动锁及焦点归还。LanguagePractice 负责本地对话、可选浏览器语音和资源清理。页面只组合公共区块；新增页同步运行元数据与市场纯 JSON。无后端或持久化依赖。
