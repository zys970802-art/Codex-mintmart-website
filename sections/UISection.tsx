export default function UISection() {
  return (
    <section id="ui" className="section">
      <header className="section-head">
        <p className="eyebrow">平台界面展示</p>
        <h2>核心界面一览</h2>
        <p className="muted">示意：资产发起、项目详情、投资人持仓、收益分配页。</p>
      </header>
      <div className="grid four screenshots">
        <div className="shot" aria-label="资产发起方看板"></div>
        <div className="shot" aria-label="项目详情页"></div>
        <div className="shot" aria-label="投资人持仓页"></div>
        <div className="shot" aria-label="收益分配页"></div>
      </div>
    </section>
  )
}
