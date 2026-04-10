import type { Project } from '../data/projects'
import { projects } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tech, imageUrl, href } = project

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-sm transition hover:border-white/20 hover:bg-white/6">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-white/4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${title} screenshot`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-linear-to-br from-violet-500/25 via-fuchsia-500/15 to-cyan-400/15" />
            <div className="absolute inset-0 bg-linear-to-r from-white/10 via-transparent to-white/10 opacity-70 mask-[radial-gradient(circle_at_30%_20%,black,transparent_60%)]" />
            <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
              Screenshot placeholder
            </div>
          </div>
        )}
      </div>

      <div className="space-y-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {title}
          </h3>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              查看
            </a>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-white/70">{description}</p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 -bottom-16 mx-auto h-32 w-96 rounded-full bg-linear-to-r from-violet-500/15 via-fuchsia-500/10 to-cyan-400/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            项目展示
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
            下面是我做过的一些项目的简单介绍。
          </p>
        </div>
        <div className="hidden sm:block">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            {projects.length} projects
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

