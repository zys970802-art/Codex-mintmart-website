export default function AboutSection() {
  return (
    <section id="about" className="section tinted">
      <header className="section-head">
        <p className="eyebrow">关于我们</p>
        <h2>品牌、团队与合作网络</h2>
      </header>
      <div className="grid three">
        <article className="card">
          <h3>品牌介绍</h3>
          <p>致力于让现实世界资产高效进入链上金融基础设施。</p>
        </article>
        <article className="card">
          <h3>愿景与使命</h3>
          <p>以合规、透明、可持续的方式连接资产与资本。</p>
        </article>
        <article className="card">
          <h3>核心团队 & 合作伙伴</h3>
          <p>来自金融、科技与区块链的一线团队，与多家机构合作。</p>
        </article>
      </div>
    </section>
  )
}
