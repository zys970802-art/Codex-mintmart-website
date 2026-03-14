'use client'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-text">
        <p className="eyebrow">机构级 Web3 RWA 平台</p>
        <h1>MintMart：让现实世界资产高效、透明地进入链上金融</h1>
        <p className="lede">一站式覆盖资产准备、发行认购、存续期运营，帮助资产发起方、投资机构与渠道伙伴安全高效完成全流程。</p>
        <div className="hero-actions">
          <a className="btn primary" href="#cta" onClick={(e) => handleScroll(e, '#cta')}>预约演示</a>
          <a className="btn ghost" href="#solutions" onClick={(e) => handleScroll(e, '#solutions')}>查看解决方案</a>
        </div>
        <ul className="pill-list">
          <li>一站式 RWA 平台</li>
          <li>机构级合规与风控</li>
          <li>多资产支持</li>
          <li>链上透明运营</li>
        </ul>
      </div>
      <div className="hero-visual" aria-label="平台 Dashboard 模拟图">
        <div className="glass dashboard">
          <div className="dash-header">
            <div>
              <p className="label">发行总览</p>
              <p className="kpi">¥ 2.45 亿</p>
            </div>
            <span className="badge">进行中</span>
          </div>
          <div className="dash-grid">
            <div className="dash-card">
              <p className="label">资产池</p>
              <p className="value">8 个</p>
              <p className="sub">票据 / 信贷 / 收益权</p>
            </div>
            <div className="dash-card">
              <p className="label">募集进度</p>
              <p className="value">78%</p>
              <div className="progress"><span style={{ width: '78%' }}></span></div>
            </div>
            <div className="dash-card">
              <p className="label">收益分配</p>
              <p className="value">季度 / 兑付中</p>
            </div>
            <div className="dash-card">
              <p className="label">投资人结构</p>
              <p className="value">机构 72% · 合格 28%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
