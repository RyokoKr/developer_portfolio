export type ContactType = 'email' | 'github' | 'wechat'

export type ContactItem = {
  type: ContactType
  name: string
  value: string
  action: 'link' | 'copy'
  href?: string
}

export const contacts: ContactItem[] = [
  {
    type: 'email',
    name: '邮箱',
    value: 'ryoko@example.com',
    action: 'copy',
  },
  {
    type: 'github',
    name: 'GitHub',
    value: 'github.com/ryoko',
    action: 'link',
    href: 'https://github.com/ryoko',
  },
  {
    type: 'wechat',
    name: 'WeChat',
    value: 'Ryoko_WeChat',
    action: 'copy',
  },
]

