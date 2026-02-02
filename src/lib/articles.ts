import { DateTime } from 'luxon'

export const articleKeys: ReadonlyArray<keyof typeof articlesData> = [
  // 'refactor',
  'todo',
  'generics'
]

export const articlesData = {
  todo: {
    title: 'TypeScript入门教程-以Todo应用为例',
    date: DateTime.fromISO('2024-06-18T12:00:00Z'),
    description: '通过构建 Todo 应用学习 TypeScript',
    ogImage: 'todo-v2'
  },
  generics: {
    title: '泛型入门教程-写给TS多次从入门到放弃的人',
    date: DateTime.fromISO('2024-06-18T12:00:00Z'),
    description: 'TypeScript的泛型太难了？',
    ogImage: 'generics'
  }
  // refactor: {
  //   title: '你的文章可能需要重构',
  //   date: DateTime.fromISO('2024-06-18T12:00:00Z'),
  //   description: 'Seven Opinionated Tips',
  //   ogImage: 'refactor-v3'
  // }
}
