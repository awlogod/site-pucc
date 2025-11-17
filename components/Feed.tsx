'use client'

import { useState, useEffect } from 'react'
import PostCard from './PostCard'
import { Post } from '@/types'

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([])
  const [filter, setFilter] = useState<'all' | 'resumos' | 'provas' | 'lembretes'>('all')

  useEffect(() => {
    // Simulação de dados - em produção viria de uma API
    const mockPosts: Post[] = [
      {
        id: '1',
        type: 'resumo',
        title: 'Resumo de Cálculo I - Limites e Derivadas',
        content: 'Resumo completo sobre limites e derivadas com exemplos práticos...',
        author: 'João Silva',
        authorId: 'user1',
        createdAt: new Date('2024-01-15'),
        tags: ['Cálculo', 'Matemática', 'Engenharia'],
        likes: 24,
        comments: 5,
      },
      {
        id: '2',
        type: 'prova',
        title: 'Prova de Física II - 2023/2',
        content: 'Prova completa de Física II do semestre passado com gabarito.',
        author: 'Maria Santos',
        authorId: 'user2',
        createdAt: new Date('2024-01-14'),
        tags: ['Física', 'Prova Antiga'],
        likes: 18,
        comments: 3,
        imageUrl: '/placeholder-prova.jpg',
      },
      {
        id: '3',
        type: 'lembrete',
        title: 'Lembrete: Prova de Química Orgânica',
        content: 'Prova de Química Orgânica na próxima segunda-feira, sala 201, às 14h.',
        author: 'Pedro Costa',
        authorId: 'user3',
        createdAt: new Date('2024-01-13'),
        tags: ['Lembrete', 'Química'],
        likes: 12,
        comments: 2,
        dueDate: new Date('2024-01-20'),
      },
    ]
    setPosts(mockPosts)
  }, [])

  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.type === filter)

  return (
    <div>
      {/* Filter Tabs */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="flex space-x-4 overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
              filter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('resumos')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
              filter === 'resumos'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Resumos
          </button>
          <button
            onClick={() => setFilter('provas')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
              filter === 'provas'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Provas
          </button>
          <button
            onClick={() => setFilter('lembretes')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
              filter === 'lembretes'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Lembretes
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <p className="text-gray-500">Nenhum post encontrado.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  )
}

