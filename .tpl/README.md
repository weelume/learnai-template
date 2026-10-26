# Learn.AI 英语口语教练模板

纯前端、中英双语的响应式英语学习演示，15 页面、30 条语言路由。默认中文，英文位于 /en。主内容包括首屏手机、四块功能卡片、40 种母语入口、4 个角色扮演情境、深色同心环练习区、三步流程、10 个工具集成展示、评价横向列表和 FAQ。

## 环境与运行
固定 Node 24.16.0、pnpm 9.15.4。先 pnpm install --frozen-lockfile，再 pnpm dev；默认 http://127.0.0.1:43580。生产使用 pnpm build 后 pnpm start，PORT / HOSTNAME 可指定端口与监听地址。Ctrl+C 停止本次服务。不需要后端、账户、数据库或密钥，环境合同见 .tpl/project.json 和 .env.example。

## 验证与修改
执行 pnpm typecheck、pnpm lint、pnpm test、pnpm build。检查 15 个页面的中英文、未知路径404、图片和字体加载、390/320窄屏、834平板、1440桌面，以及搜索、抽屉、键盘焦点、对话、FAQ、表单和语言参数保留。动效清单见 .tpl/docs/MOTION.md，验收报告如实标注未验证项。

源码位于 src/features/site-templates/catalog/learnai。host.tsx 管理品牌与注入，data.ts 管理双语数据，theme.css 管理主题，Mockup.tsx 提供中文界面示意，Sections.tsx / LanguagePractice.tsx 提供公共区块和交互，pages/ 组合页面，meta.ts 注册页面。路由入口 src/app/[[...slug]]/page.tsx；修改导航和页面时同步 .tpl/template.json。修改映射见 .tpl/customization.json。pnpm bundle 生成共享包，exports 的 template 和 host 是公共合同。

## 能力边界
对话在本地运行固定示例脚本，1.2 秒后回复，不调用真实 AI。表单仅校验，不发送、不保存；价格方案不创建订单或订阅；Cookie 控件不持久保存或开启追踪。评分、评价与用户数量来自参考设计，是示意文案，不是真实服务统计。语音识别仅在主动点击后通过浏览器能力启用，浏览器提供方可能处理音频；不支持时明确提示文字输入。语音朗读使用浏览器合成。关闭练习后清理会话、定时器与音频。debug 日志只记录事件、计数和非敏感枚举，不包含对话或表单内容。

## 素材、来源与交付
参考 Jiro LearnAI 公开预览。原站实际只有单页，博客、价格、关于和法律链接多为占位；本模板补齐了同风格双语页面。图片、字体与矢量标识本地托管，来源见 .tpl/docs/ASSETS.json；商业再分发授权尚未完整核实，listed=false、redistributionAllowed=false。Poppins OFL 和 MiSans 字体资料保留在运行字体目录。独立默认品牌为 Learn.AI。

正式源码交付只包含源码、依赖锁、.tpl 与必要素材，不提交 node_modules、缓存、日志、真实环境文件或秘密。Git 地址见 .tpl/template.json。代码提交后再生成共享包，保留来源提交及包 SHA256；不得仅凭构建通过宣称完整视觉动效验收通过。
