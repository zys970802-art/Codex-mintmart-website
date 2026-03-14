"use client";
import { useState } from "react";
import { assetTypes, coreAbilities, flowSteps, insights, roles, scenes, valueCards } from "./lib/data";
import { NavBar } from "./components/NavBar";

export default function Page() {
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    if (!formData.email || !formData.name) return;
    setLoading(true);
    setHint("提交中，稍候...");
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `请用一句话为以下机构提供定制跟进话术：\n姓名:${formData.name}\n机构:${formData.org}\n角色:${formData.role}\n资产类型:${formData.asset}\n留言:${formData.message}`,
        }),
      });
      const data = await res.json();
      setHint(data.reply || "已收到，我们会尽快联系。");
    } catch (err) {
      setHint("已收到，我们会尽快联系。");
    } finally {
      setLoading(false);
      form.reset();
    }
  }

  return (
    <div>
      <NavBar />
      <main>
        <section id="hero" className="hero">
          <div className="hero-text">
            <p className="eyebrow">机构级 Web3 RWA 平台</p>
            <h1>MintMart：让现实世界资产高效、透明地进入链上金融</h1>
            <p className="lede">
              一站式覆盖资产准备、发行认购、存续期运营，帮助资产发起方、投资机构与渠道伙伴安全高效完成全流程。
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#cta">
                预约演示
              </a>
              <a className="btn ghost" href="#solutions">
                查看解决方案
              </a>
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
                  <div className="progress">
                    <span style={{ width: "78%" }}></span>
                  </div>
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

        <section id="value" className="section">
          <header className="section-head">
            <p className="eyebrow">平台价值概览</p>
            <h2>一站式 · 机构级 · 多资产 · 链上透明</h2>
            <p>覆盖资产准备、发行认购、存续期运营的全流程能力，确保安全、合规与效率。</p>
          </header>
          <div className="grid four">
            {valueCards.map((card) => (
              <article className="card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="section">
          <header className="section-head">
            <p className="eyebrow">平台核心能力</p>
            <h2>四大核心能力，面向全生命周期</h2>
          </header>
          <div className="grid four">
            {coreAbilities.map((c) => (
              <article className="card split" key={c.title}>
                <div>
                  <h3>{c.title}</h3>
                  <ul>
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="thumb" aria-label="后台界面缩略图"></div>
              </article>
            ))}
          </div>
        </section>

        <section id="flow" className="section tinted">
          <header className="section-head">
            <p className="eyebrow">全流程运作图</p>
            <h2>4 步完成 RWA 全生命周期</h2>
          </header>
          <div className="flow">
            {flowSteps.map((s, i) => (
              <div className="flow-step" key={s.title}>
                <div className="step-badge">{String(i + 1).padStart(2, "0")}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="section">
          <header className="section-head">
            <p className="eyebrow">双角色入口</p>
            <h2>发起方与投资人/渠道的专属路径</h2>
          </header>
          <div className="grid two">
            {roles.map((r) => (
              <article className="card accent" key={r.title}>
                <h3>{r.title}</h3>
                <ul>
                  {r.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <a className="btn primary" href="#cta">
                  {r.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="assets" className="section tinted">
          <header className="section-head">
            <p className="eyebrow">支持资产类型</p>
            <h2>覆盖多元底层资产，灵活适配结构</h2>
          </header>
          <div className="grid four">
            {assetTypes.map((a) => (
              <article className="card mini" key={a.name}>
                <h3>{a.name}</h3>
                <p>典型期限：{a.term}</p>
                <p className="muted">适配结构：{a.structure}</p>
              </article>
            ))}
          </div>
        </section>

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

        <section id="cases" className="section tinted">
          <header className="section-head">
            <p className="eyebrow">应用场景 / 案例展示</p>
            <h2>典型 RWA 应用场景</h2>
          </header>
          <div className="grid five">
            {scenes.map((s) => (
              <article className="card" key={s}>
                <h3>{s}</h3>
                <p>围绕资产类型、平台参与环节与核心价值点，展示落地效果。</p>
              </article>
            ))}
          </div>
        </section>

        <section id="insights" className="section">
          <header className="section-head">
            <p className="eyebrow">研究洞察</p>
            <h2>行业观点与报告</h2>
          </header>
          <div className="grid five">
            {insights.map((i) => (
              <article className="card mini" key={i}>
                <h3>{i}</h3>
                <p>获取最新洞察与平台观点。</p>
              </article>
            ))}
          </div>
        </section>

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

        <section id="cta" className="section cta">
          <div className="cta-card glass">
            <div>
              <p className="eyebrow">联系我们 / 预约演示</p>
              <h2>让您的资产进入下一代链上金融基础设施</h2>
              <p>与 MintMart 团队交流发行、分销与运营需求。</p>
            </div>
            <form className="form" onSubmit={onSubmit}>
              <label>
                姓名
                <input name="name" required />
              </label>
              <label>
                机构名称
                <input name="org" required />
              </label>
              <label>
                邮箱
                <input type="email" name="email" required />
              </label>
              <label>
                身份角色
                <input name="role" required />
              </label>
              <label>
                关注资产类型
                <input name="asset" required />
              </label>
              <label>
                留言内容
                <textarea name="message" rows={3} required />
              </label>
              <button type="submit" className="btn primary" disabled={loading}>
                {loading ? "提交中..." : "提交咨询 / 预约演示"}
              </button>
              <p className="form-hint" aria-live="polite">{hint}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>MintMart</h3>
            <p>一站式机构级 RWA 平台，覆盖资产准备、发行认购与存续期运营。</p>
          </div>
          <div>
            <h4>快速导航</h4>
            <ul>
              <li>
                <a href="#hero">首页</a>
              </li>
              <li>
                <a href="#value">平台能力</a>
              </li>
              <li>
                <a href="#solutions">解决方案</a>
              </li>
              <li>
                <a href="#assets">资产类型</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>产品与方案</h4>
            <ul>
              <li>
                <a href="#flow">运行流程</a>
              </li>
              <li>
                <a href="#cases">案例展示</a>
              </li>
              <li>
                <a href="#ui">界面展示</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>研究洞察</h4>
            <ul>
              <li>
                <a href="#insights">行业文章</a>
              </li>
              <li>
                <a href="#insights">监管观察</a>
              </li>
              <li>
                <a href="#insights">报告下载</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>联系方式</h4>
            <ul>
              <li>
                <a href="mailto:contact@mintmart.io">contact@mintmart.io</a>
              </li>
              <li>
                <a href="#cta">预约演示</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <a href="#">法律声明</a>
          <a href="#">隐私政策</a>
          <span>© 2026 MintMart. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
