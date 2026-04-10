import type { ReactNode } from 'react'
import { useState } from 'react'
import { contacts } from '../data/contact'

function getContactIcon(type: 'email' | 'github' | 'wechat'): ReactNode {
  if (type === 'email') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M4 7.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-9Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m5 8 7 5 7-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'github') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.2 4.2 0 0 1 .1-3.2s1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.5 1.1.5 2.3.1 3.2a4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M9.5 5C5.4 5 2 7.8 2 11.3c0 2 1.1 3.8 2.8 5l-.8 2.7 3-1.5c.8.2 1.6.3 2.5.3 4.1 0 7.5-2.8 7.5-6.3S13.6 5 9.5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15.8 10.2c3.4 0 6.2 2.3 6.2 5.2 0 1.7-1 3.2-2.5 4.2l.6 2-2.3-1.2c-.7.2-1.3.3-2 .3-3.4 0-6.2-2.3-6.2-5.2 0-2.8 2.8-5.3 6.2-5.3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="7.9" cy="10.8" r="1" fill="currentColor" />
      <circle cx="11.4" cy="10.8" r="1" fill="currentColor" />
      <circle cx="14.7" cy="15.2" r="1" fill="currentColor" />
      <circle cx="18" cy="15.2" r="1" fill="currentColor" />
    </svg>
  )
}

export function Contacts() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null)

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedValue(value)
      window.setTimeout(() => setCopiedValue(null), 1500)
    } catch {
      // Clipboard may fail in non-secure contexts.
      setCopiedValue(null)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pb-24">
      <div className="rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          联系方式
        </h2>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          欢迎通过下面这些方式联系我。
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {contacts.map((item) =>
            item.action === 'link' && item.href ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-fuchsia-400/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-r from-violet-500/25 to-fuchsia-500/25 text-white/90 transition group-hover:from-violet-500/40 group-hover:to-fuchsia-500/40">
                  {getContactIcon(item.type)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white">
                    {item.name}
                  </span>
                  <span className="block truncate text-xs text-white/65">
                    {item.value}
                  </span>
                </span>
              </a>
            ) : (
              <button
                key={item.name}
                type="button"
                onClick={() => handleCopy(item.value)}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-fuchsia-400/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-r from-violet-500/25 to-fuchsia-500/25 text-white/90 transition group-hover:from-violet-500/40 group-hover:to-fuchsia-500/40">
                  {getContactIcon(item.type)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-white">
                    {item.name}
                  </span>
                  <span className="block truncate text-xs text-white/65">
                    {item.value}
                  </span>
                  <span className="block text-[11px] text-fuchsia-300/80">
                    {copiedValue === item.value ? '已复制' : '点击复制'}
                  </span>
                </span>
              </button>
            )
          )}
        </div>
      </div>
    </section>
  )
}

