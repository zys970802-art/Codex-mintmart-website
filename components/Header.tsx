'use client'

import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) {
      setMenuOpen(false)
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="nav-shell">
      <div className="nav">
        <div className="brand">MintMart</div>
        <nav id="main-nav" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>首页</a>
          <a href="#value" onClick={(e) => handleNavClick(e, '#value')}>平台能力</a>
          <a href="#solutions" onClick={(e) => handleNavClick(e, '#solutions')}>解决方案</a>
          <a href="#assets" onClick={(e) => handleNavClick(e, '#assets')}>资产类型</a>
          <a href="#flow" onClick={(e) => handleNavClick(e, '#flow')}>运行流程</a>
          <a href="#cases" onClick={(e) => handleNavClick(e, '#cases')}>案例展示</a>
          <a href="#insights" onClick={(e) => handleNavClick(e, '#insights')}>研究洞察</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>关于我们</a>
          <a className="btn ghost" href="#cta" onClick={(e) => handleNavClick(e, '#cta')}>联系我们 / 预约演示</a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="打开导航"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
