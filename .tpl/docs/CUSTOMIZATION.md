# 修改指南

从 customization.json 定位入口。双语文案同时维护，中文标题按语义分行。公共品牌来自 host，运行素材位于 public/templates/learnai，市场截图位于 .tpl/assets。替换素材同步来源记录。修改语言切换执行 tests/routing.test.mjs，确认独立根路径与多层基路径均保留查询和锚点。修改对话需验证定时器清理、切换场景和关闭后无回复串入；不要把本地脚本变成隐式联网功能。
