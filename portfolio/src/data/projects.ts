export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  imageUrl?: string
  href?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: '个人作品集网站',
    description:
      '使用 React + TypeScript + Tailwind CSS 构建的个人作品集，包含首页、关于我、项目展示与联系方式。',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    imageUrl: '/portfolio.png',
    href: '#',
  },
  {
    id: 'dashboard',
    title: '数据看板（示例）',
    description: '响应式布局与可复用组件体系，支持深色主题与交互动效。',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    // imageUrl: '/images/dashboard.png',
    href: '#',
  },
  {
    id: 'saas-landing',
    title: 'SaaS 落地页（示例）',
    description: '强调视觉层次与转化路径，使用渐变作为强调色，移动端体验优化。',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    // imageUrl: '/images/saas.png',
    href: '#',
  },
]

