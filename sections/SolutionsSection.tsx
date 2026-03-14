'use client'

export default function SolutionsSection() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="solutions" className="section">
      <header className="section-head">
        <p className="eyebrow">双角色入口</p>
        <h2>发起方与投资人/渠道的专属路径</h2>
      </header>
      <div className="grid two">
        <article className="card accent">
          <h3>面向资产发起方</h3>
          <ul>
            <li>快速发起 RWA 项目，配置发行规则与参数</li>
            <li>查看审核与发行进度，统一材料披露</li>
            <li>管理存续期运营与披露</li>
          </ul>
          <a className="btn primary" href="#cta" onClick={(e) => handleScroll(e, '#cta')}>查看发起方案</a>
        </article>
        <article className="card accent">
          <h3>面向投资人 / 渠道方</h3>
          <ul>
            <li>浏览可投产品，查看披露文件</li>
            <li>在线认购与持仓查看</li>
            <li>跟踪收益分配与退出安排</li>
          </ul>
          <a className="btn primary" href="#cta" onClick={(e) => handleScroll(e, '#cta')}>查看投资人方案</a>
        </article>
      </div>
    </section>
  )
}
