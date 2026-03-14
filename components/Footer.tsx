'use client'

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>MintMart</h3>
          <p>一站式机构级 RWA 平台，覆盖资产准备、发行认购与存续期运营。</p>
        </div>
        <div>
          <h4>快速导航</h4>
          <ul>
            <li><a href="#hero" onClick={(e) => handleScroll(e, '#hero')}>首页</a></li>
            <li><a href="#value" onClick={(e) => handleScroll(e, '#value')}>平台能力</a></li>
            <li><a href="#solutions" onClick={(e) => handleScroll(e, '#solutions')}>解决方案</a></li>
            <li><a href="#assets" onClick={(e) => handleScroll(e, '#assets')}>资产类型</a></li>
          </ul>
        </div>
        <div>
          <h4>产品与方案</h4>
          <ul>
            <li><a href="#flow" onClick={(e) => handleScroll(e, '#flow')}>运行流程</a></li>
            <li><a href="#cases" onClick={(e) => handleScroll(e, '#cases')}>案例展示</a></li>
            <li><a href="#ui" onClick={(e) => handleScroll(e, '#ui')}>界面展示</a></li>
          </ul>
        </div>
        <div>
          <h4>研究洞察</h4>
          <ul>
            <li><a href="#insights" onClick={(e) => handleScroll(e, '#insights')}>行业文章</a></li>
            <li><a href="#insights" onClick={(e) => handleScroll(e, '#insights')}>监管观察</a></li>
            <li><a href="#insights" onClick={(e) => handleScroll(e, '#insights')}>报告下载</a></li>
          </ul>
        </div>
        <div>
          <h4>联系方式</h4>
          <ul>
            <li><a href="mailto:contact@mintmart.io">contact@mintmart.io</a></li>
            <li><a href="#cta" onClick={(e) => handleScroll(e, '#cta')}>预约演示</a></li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <a href="#">法律声明</a>
        <a href="#">隐私政策</a>
        <span>© 2026 MintMart. All rights reserved.</span>
      </div>
    </footer>
  )
}
