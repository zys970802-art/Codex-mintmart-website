export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section">
      <header className="section-head">
        <p className="eyebrow">平台核心能力</p>
        <h2>四大核心能力，面向全生命周期</h2>
      </header>
      <div className="grid four">
        <article className="card split">
          <div>
            <h3>资产发行管理</h3>
            <ul>
              <li>发行规则与参数配置</li>
              <li>KYC/KYB 与准入管理</li>
              <li>链上发行与申购窗口</li>
            </ul>
          </div>
          <div className="thumb" aria-label="后台界面缩略图"></div>
        </article>
        <article className="card split">
          <div>
            <h3>投资人认购与持仓管理</h3>
            <ul>
              <li>产品浏览与材料披露</li>
              <li>认购确认与额度管理</li>
              <li>多渠道协同分销</li>
            </ul>
          </div>
          <div className="thumb" aria-label="后台界面缩略图"></div>
        </article>
        <article className="card split">
          <div>
            <h3>存续期资产运营</h3>
            <ul>
              <li>收益分配与兑付跟踪</li>
              <li>项目进展披露与状态更新</li>
              <li>赎回、转让与退出流程</li>
            </ul>
          </div>
          <div className="thumb" aria-label="后台界面缩略图"></div>
        </article>
        <article className="card split">
          <div>
            <h3>信息披露与报表管理</h3>
            <ul>
              <li>数据看板与可视化</li>
              <li>合规报表与下载</li>
              <li>API / 技术接入</li>
            </ul>
          </div>
          <div className="thumb" aria-label="后台界面缩略图"></div>
        </article>
      </div>
    </section>
  )
}
