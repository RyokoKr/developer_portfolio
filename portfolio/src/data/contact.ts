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
    value: 'q3238036723@outlook.com',
    action: 'copy',
  },
  {
    type: 'github',
    name: 'GitHub',
    value: 'github.com/ryoko',
    action: 'link',
    href: 'https://github.com/RyokoKr',
  },
  {
    type: 'wechat',
    name: 'WeChat',
    value: 'qw2938166072',
    action: 'copy',
  },
]

