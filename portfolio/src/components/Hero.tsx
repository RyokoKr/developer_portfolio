import RyokoImg from '../assets/Ryoko.jpg'
type HeroProps = {
  title?: string
  subtitle?: string
  avatarUrl?: string
  avatarText?: string
}

/**
 * 首页 Hero：大标题 + 简介 + 头像（无图片时用渐变头像占位）。
 * 该组件只负责展示，后续可接入 data/ 配置。
 */
export function Hero({
  title = '你好，我是Ryoko',
  subtitle = '我是一名前端开发者，专注于通过 Vue/React、TypeScript、Vite 实现现代 Web 体验。',
  avatarUrl = RyokoImg,
  avatarText = 'Ryoko',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* gradient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-72 w-2xl max-w-[92vw] rounded-full bg-linear-to-r from-violet-500/30 via-fuchsia-500/25 to-cyan-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 sm:py-28 md:grid-cols-[1fr_auto]">
        <div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            <span className="bg-linear-to-r from-violet-300 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-violet-500 to-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-fuchsia-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              查看项目
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              联系我
            </a>
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-linear-to-r from-violet-500/35 via-fuchsia-500/25 to-cyan-400/25 blur-2xl" />
            <div className="relative grid h-36 w-36 place-items-center rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500 p-[2px] shadow-lg shadow-fuchsia-500/15 sm:h-44 sm:w-44">
              <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-[#0a0a0a]">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="select-none text-lg font-semibold tracking-wide text-white/90 sm:text-xl">
                    {avatarText}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

