# 修改指南

从 customization.json 定位入口。双语文案同时维护，中文标题按语义分行。公共品牌来自 host，运行素材位于 public/templates/learnai，市场截图位于 .tpl/assets。替换素材同步来源记录。修改语言切换执行 tests/routing.test.mjs，确认独立根路径与多层基路径均保留查询和锚点。修改对话需验证定时器清理、切换场景和关闭后无回复串入；不要把本地脚本变成隐式联网功能。

滚动条在 `src/features/site-templates/catalog/learnai/scrollbars.css` 统一维护，颜色、宽度与圆角使用 `--la-scrollbar-*` 主题变量。整页通过 `html:has(.la-root)` 限定范围，离开模板后自动恢复外部页面样式；触控和高对比模式保留系统原生表现。修改后验证价格页、抽屉、横向评价区、窄屏及路由切换，检查开关抽屉时内容与固定按钮不跳动。
