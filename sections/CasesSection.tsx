export default function CasesSection() {
  return (
    <section id="cases" className="section tinted">
      <header className="section-head">
        <p className="eyebrow">应用场景 / 案例展示</p>
        <h2>典型 RWA 应用场景</h2>
      </header>
      <div className="grid five">
        <article className="card">
          <h3>消费金融资产池上链</h3>
          <p>资产类型：消费信贷 · 平台环节：发行/披露/兑付 · 价值：提升透明度与融资效率。</p>
        </article>
        <article className="card">
          <h3>货币市场基金代币化</h3>
          <p>资产类型：基金 · 平台环节：发行/认购/持仓 · 价值：高流动性与链上清算。</p>
        </article>
        <article className="card">
          <h3>供应链应收凭证化</h3>
          <p>资产类型：应收账款 · 平台环节：发行/分销/回款跟踪 · 价值：缩短资金周转。</p>
        </article>
        <article className="card">
          <h3>黄金 / 实物权益映射</h3>
          <p>资产类型：大宗商品 · 平台环节：映射/托管/退出 · 价值：确权可追溯。</p>
        </article>
        <article className="card">
          <h3>新能源收益权代币化</h3>
          <p>资产类型：收益权 · 平台环节：发行/披露/收益分配 · 价值：释放长期现金流。</p>
        </article>
      </div>
    </section>
  )
}
