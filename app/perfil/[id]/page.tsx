'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { User, Post } from '@/types'
import PostCard from '@/components/PostCard'

export default function PerfilPage() {
  const params = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulação - em produção viria de uma API
    const mockUser: User = {
      id: params.id as string,
      name: 'João Silva',
      email: 'joao.silva@puccampinas.edu.br',
      course: 'Engenharia de Computação',
      semester: 5,
    }

    const mockPosts: Post[] = [
      {
        id: '1',
        type: 'resumo',
        title: 'Resumo de Cálculo I - Limites e Derivadas',
        content: 'Resumo completo sobre limites e derivadas com exemplos práticos...',
        author: 'João Silva',
        authorId: params.id as string,
        createdAt: new Date('2024-01-15'),
        tags: ['Cálculo', 'Matemática', 'Engenharia'],
        likes: 24,
        comments: 5,
      },
      {
        id: '2',
        type: 'resumo',
        title: 'Resumo de Física II - Eletromagnetismo',
        content: 'Conceitos fundamentais de eletromagnetismo...',
        author: 'João Silva',
        authorId: params.id as string,
        createdAt: new Date('2024-01-10'),
        tags: ['Física', 'Eletromagnetismo'],
        likes: 18,
        comments: 3,
      },
    ]

    setUser(mockUser)
    setPosts(mockPosts)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Carregando...</div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Usuário não encontrado</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-semibold text-4xl">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
            {user.course && (
              <p className="text-gray-600 mb-1">
                <strong>Curso:</strong> {user.course}
              </p>
            )}
            {user.semester && (
              <p className="text-gray-600 mb-1">
                <strong>Semestre:</strong> {user.semester}º
              </p>
            )}
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-primary-500 mb-2">{posts.length}</div>
          <div className="text-gray-600">Posts</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-primary-500 mb-2">
            {posts.reduce((sum, post) => sum + post.likes, 0)}
          </div>
          <div className="text-gray-600">Curtidas</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <div className="text-3xl font-bold text-primary-500 mb-2">
            {posts.reduce((sum, post) => sum + post.comments, 0)}
          </div>
          <div className="text-gray-600">Comentários</div>
        </div>
      </div>

      {/* User Posts */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Posts de {user.name}</h2>
        <div className="space-y-4">
          {posts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500">Este usuário ainda não publicou nenhum post.</p>
            </div>
          ) : (
            posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

