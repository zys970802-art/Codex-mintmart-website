'use client'

import { useState } from 'react'

interface FormData {
  name: string
  org: string
  email: string
  role: string
  asset: string
  message: string
}

export default function CTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    org: '',
    email: '',
    role: '',
    asset: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [hint, setHint] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setHint('提交中...')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setHint(data.message || '已收到您的需求，我们会尽快与您联系。')
        setFormData({
          name: '',
          org: '',
          email: '',
          role: '',
          asset: '',
          message: '',
        })
      } else {
        setStatus('error')
        setHint(data.error || '提交失败，请稍后重试。')
      }
    } catch (err) {
      setStatus('error')
      setHint('网络错误，请检查连接后重试。')
    }
  }

  return (
    <section id="cta" className="section cta">
      <div className="cta-card glass">
        <div>
          <p className="eyebrow">联系我们 / 预约演示</p>
          <h2>让您的资产进入下一代链上金融基础设施</h2>
          <p>与 MintMart 团队交流发行、分销与运营需求。</p>
        </div>
        <form id="contact-form" className="form" onSubmit={handleSubmit}>
          <label>
            姓名
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </label>
          <label>
            机构名称
            <input
              type="text"
              name="org"
              required
              value={formData.org}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </label>
          <label>
            邮箱
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </label>
          <label>
            身份角色
            <input
              type="text"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </label>
          <label>
            关注资产类型
            <input
              type="text"
              name="asset"
              required
              value={formData.asset}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </label>
          <label>
            留言内容
            <textarea
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'submitting'}
            />
          </label>
          <button
            type="submit"
            className="btn primary"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? '提交中...' : '提交咨询 / 预约演示'}
          </button>
          <p
            className={`form-hint ${status === 'success' ? 'success' : status === 'error' ? 'error' : ''}`}
            id="form-hint"
            aria-live="polite"
          >
            {hint}
          </p>
        </form>
      </div>
    </section>
  )
}
