export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "首页", href: "#hero" },
  { label: "平台能力", href: "#value" },
  { label: "解决方案", href: "#solutions" },
  { label: "资产类型", href: "#assets" },
  { label: "运行流程", href: "#flow" },
  { label: "案例展示", href: "#cases" },
  { label: "研究洞察", href: "#insights" },
  { label: "关于我们", href: "#about" },
];

export const valueCards = [
  { title: "一站式 RWA 平台", body: "从资产筛选、合规发行到存续期运营，统一承载，减少对接成本。" },
  { title: "机构级产品能力", body: "灵活的发行参数、准入规则与风控策略，满足专业机构需求。" },
  { title: "多资产支持", body: "覆盖信贷、基金、票据、收益权、大宗商品、新能源等多类底层。" },
  { title: "链上透明运营", body: "募集、收益、进度与资产状态全程上链可追踪，增强信任。" },
];

export const coreAbilities = [
  {
    title: "资产发行管理",
    points: ["发行规则与参数配置", "KYC/KYB 与准入管理", "链上发行与申购窗口"],
  },
  {
    title: "投资人认购与持仓管理",
    points: ["产品浏览与材料披露", "认购确认与额度管理", "多渠道协同分销"],
  },
  {
    title: "存续期资产运营",
    points: ["收益分配与兑付跟踪", "项目进展披露与状态更新", "赎回、转让与退出流程"],
  },
  {
    title: "信息披露与报表管理",
    points: ["数据看板与可视化", "合规报表与下载", "API / 技术接入"],
  },
];

export const flowSteps = [
  { title: "资产准备", desc: "资产筛选、基础信息录入、法律结构设计、尽调材料准备。" },
  { title: "合规发行", desc: "准入规则配置、KYC/KYB、发行参数设定、上链发行与申购开启。" },
  { title: "投资认购与分销", desc: "产品浏览、材料披露、认购确认、渠道协同分销与额度管理。" },
  { title: "存续期运营", desc: "收益分配、进展披露、资产状态更新、赎回/转让/退出管理。" },
];

export const roles = [
  {
    title: "面向资产发起方",
    items: ["快速发起 RWA 项目，配置发行规则与参数", "查看审核与发行进度，统一材料披露", "管理存续期运营与披露"],
    cta: "查看发起方案",
  },
  {
    title: "面向投资人 / 渠道方",
    items: ["浏览可投产品，查看披露文件", "在线认购与持仓查看", "跟踪收益分配与退出安排"],
    cta: "查看投资人方案",
  },
];

export const assetTypes = [
  { name: "消费信贷", term: "短中期 · 现金流平滑", structure: "资产池 / 分层" },
  { name: "私募信贷 / 应收账款", term: "3-12 个月 · 应收回款", structure: "AB 分层、质押" },
  { name: "货币市场基金", term: "7-30 天 · 稳健现金流", structure: "份额代币化" },
  { name: "债券 / 票据", term: "6-36 个月", structure: "标准化发行" },
  { name: "供应链融资", term: "1-9 个月 · 回款可预测", structure: "应收凭证化" },
  { name: "收益权", term: "灵活 · 现金流挂钩项目收益", structure: "收益权映射" },
  { name: "大宗商品 / 黄金", term: "中长期 · 价格波动", structure: "实物权益映射" },
  { name: "新能源现金流", term: "12-60 个月 · 稳定发电收益", structure: "收益权代币化" },
];

export const scenes = [
  "消费金融资产池上链",
  "货币市场基金代币化",
  "供应链应收凭证化",
  "黄金 / 实物权益映射",
  "新能源收益权代币化",
];

export const insights = [
  "什么是 RWA",
  "监管观察",
  "合规代币化流程解读",
  "平台观点",
  "报告下载",
];
