export default function FlowSection() {
  return (
    <section id="flow" className="section tinted">
      <header className="section-head">
        <p className="eyebrow">全流程运作图</p>
        <h2>4 步完成 RWA 全生命周期</h2>
      </header>
      <div className="flow">
        <div className="flow-step">
          <div className="step-badge">01</div>
          <h3>资产准备</h3>
          <p>资产筛选、基础信息录入、法律结构设计、尽调材料准备。</p>
        </div>
        <div className="flow-step">
          <div className="step-badge">02</div>
          <h3>合规发行</h3>
          <p>准入规则配置、KYC/KYB、发行参数设定、上链发行与申购开启。</p>
        </div>
        <div className="flow-step">
          <div className="step-badge">03</div>
          <h3>投资认购与分销</h3>
          <p>产品浏览、材料披露、认购确认、渠道协同分销与额度管理。</p>
        </div>
        <div className="flow-step">
          <div className="step-badge">04</div>
          <h3>存续期运营</h3>
          <p>收益分配、进展披露、资产状态更新、赎回/转让/退出管理。</p>
        </div>
      </div>
    </section>
  )
}
