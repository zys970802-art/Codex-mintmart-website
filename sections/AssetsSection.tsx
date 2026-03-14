export default function AssetsSection() {
  return (
    <section id="assets" className="section tinted">
      <header className="section-head">
        <p className="eyebrow">支持资产类型</p>
        <h2>覆盖多元底层资产，灵活适配结构</h2>
      </header>
      <div className="grid four">
        <article className="card mini">
          <h3>消费信贷</h3>
          <p>典型期限：短中期 · 现金流平滑</p>
          <p className="muted">适配结构：资产池/分层</p>
        </article>
        <article className="card mini">
          <h3>私募信贷 / 应收账款</h3>
          <p>典型期限：3-12 个月 · 应收回款</p>
          <p className="muted">适配结构：AB 分层、质押</p>
        </article>
        <article className="card mini">
          <h3>货币市场基金</h3>
          <p>典型期限：7-30 天 · 稳健现金流</p>
          <p className="muted">适配结构：份额代币化</p>
        </article>
        <article className="card mini">
          <h3>债券 / 票据</h3>
          <p>典型期限：6-36 个月</p>
          <p className="muted">适配结构：标准化发行</p>
        </article>
        <article className="card mini">
          <h3>供应链融资</h3>
          <p>典型期限：1-9 个月 · 回款可预测</p>
          <p className="muted">适配结构：应收凭证化</p>
        </article>
        <article className="card mini">
          <h3>收益权</h3>
          <p>典型期限：灵活 · 现金流挂钩项目收益</p>
          <p className="muted">适配结构：收益权映射</p>
        </article>
        <article className="card mini">
          <h3>大宗商品 / 黄金</h3>
          <p>典型期限：中长期 · 价格波动</p>
          <p className="muted">适配结构：实物权益映射</p>
        </article>
        <article className="card mini">
          <h3>新能源现金流</h3>
          <p>典型期限：12-60 个月 · 稳定发电收益</p>
          <p className="muted">适配结构：收益权代币化</p>
        </article>
      </div>
    </section>
  )
}
