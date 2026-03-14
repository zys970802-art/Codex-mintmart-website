import { useState } from "react";
import { navItems } from "@/app/lib/data";

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell">
      <div className="nav">
        <div className="brand">MintMart</div>
        <nav id="main-nav" className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn ghost" href="#cta" onClick={() => setOpen(false)}>
            联系我们 / 预约演示
          </a>
        </nav>
        <button className="nav-toggle" aria-label="打开导航" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </div>
    </header>
  );
}
