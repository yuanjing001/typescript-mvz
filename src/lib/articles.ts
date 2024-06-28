import { DateTime } from 'luxon'

export const articleKeys: ReadonlyArray<keyof typeof articlesData> = [
  'refactor',
  'todo',
  'generics'
]

export const articlesData = {
  todo: {
    title: 'TypeScript入门教程-以Todo应用为例',
    date: DateTime.fromISO('2019-12-18T12:00:00Z'),
    description: 'Learn TypeScript by Building a Todo App',
    ogImage: 'todo-v2'
  },
  generics: {
    title: '写给TS泛型多次从入门到放弃的人的泛型入门教程',
    date: DateTime.fromISO('2019-11-22T12:00:00Z'),
    description: 'TypeScript的泛型太难了？',
    ogImage: 'generics'
  },
  refactor: {
    title: '你的文章可能需要重构',
    date: DateTime.fromISO('2020-01-01T09:00:00Z'),
    description: 'Seven Opinionated Tips',
    ogImage: 'refactor-v3'
  }
}
