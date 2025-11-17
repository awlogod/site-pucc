export type PostType = 'resumo' | 'prova' | 'lembrete'

export interface Post {
  id: string
  type: PostType
  title: string
  content: string
  author: string
  authorId: string
  createdAt: Date
  tags?: string[]
  likes: number
  comments: number
  imageUrl?: string
  dueDate?: Date
}

export interface User {
  id: string
  name: string
  email: string
  course?: string
  semester?: number
  avatar?: string
}

