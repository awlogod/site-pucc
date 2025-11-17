'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Post } from '@/types'
import { formatDistanceToNow } from 'date-fns'
import { FiHeart, FiMessageCircle, FiShare2, FiBook, FiFileText, FiBell, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

export default function PostPage() {
  const params = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulação - em produção viria de uma API
    const mockPost: Post = {
      id: params.id as string,
      type: 'resumo',
      title: 'Resumo de Cálculo I - Limites e Derivadas',
      content: `# Limites

Um limite é o valor que uma função se aproxima quando a variável independente se aproxima de um determinado valor.

## Definição Formal

Seja f(x) uma função definida em um intervalo aberto contendo a, exceto possivelmente em a. Dizemos que o limite de f(x) quando x tende a a é L, e escrevemos:

lim(x→a) f(x) = L

se para todo ε > 0, existe um δ > 0 tal que se 0 < |x - a| < δ, então |f(x) - L| < ε.

## Propriedades dos Limites

1. Limite de uma constante: lim(x→a) c = c
2. Limite de uma soma: lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)
3. Limite de um produto: lim(x→a) [f(x) · g(x)] = lim(x→a) f(x) · lim(x→a) g(x)
4. Limite de um quociente: lim(x→a) [f(x) / g(x)] = lim(x→a) f(x) / lim(x→a) g(x)

# Derivadas

A derivada de uma função representa a taxa de variação instantânea da função em relação à sua variável independente.

## Definição

A derivada de f(x) no ponto x = a é definida como:

f'(a) = lim(h→0) [f(a + h) - f(a)] / h

## Regras de Derivação

1. Derivada de uma constante: d/dx [c] = 0
2. Derivada de x^n: d/dx [x^n] = n·x^(n-1)
3. Regra do produto: d/dx [f(x)·g(x)] = f'(x)·g(x) + f(x)·g'(x)
4. Regra do quociente: d/dx [f(x)/g(x)] = [f'(x)·g(x) - f(x)·g'(x)] / [g(x)]²
5. Regra da cadeia: d/dx [f(g(x))] = f'(g(x))·g'(x)`,
      author: 'João Silva',
      authorId: 'user1',
      createdAt: new Date('2024-01-15'),
      tags: ['Cálculo', 'Matemática', 'Engenharia'],
      likes: 24,
      comments: 5,
    }
    setPost(mockPost)
    setLoading(false)
  }, [params.id])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Carregando...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Post não encontrado</div>
      </div>
    )
  }

  const getIcon = () => {
    switch (post.type) {
      case 'resumo':
        return <FiBook className="text-blue-500" />
      case 'prova':
        return <FiFileText className="text-green-500" />
      case 'lembrete':
        return <FiBell className="text-yellow-500" />
      default:
        return null
    }
  }

  const getTypeLabel = () => {
    switch (post.type) {
      case 'resumo':
        return 'Resumo'
      case 'prova':
        return 'Prova Antiga'
      case 'lembrete':
        return 'Lembrete'
      default:
        return ''
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-500 mb-6"
      >
        <FiArrowLeft />
        <span>Voltar</span>
      </Link>

      <article className="bg-white rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-lg">
                {post.author.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <Link href={`/perfil/${post.authorId}`} className="font-semibold text-gray-800 hover:text-primary-500 text-lg">
                {post.author}
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                {getIcon()}
                <span>{getTypeLabel()}</span>
                <span>•</span>
                <span>
                  {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Image */}
        {post.imageUrl && (
          <div className="mb-6 rounded-lg overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Due Date for Lembretes */}
        {post.dueDate && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">
              <strong>Data do Evento:</strong> {post.dueDate.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="prose max-w-none mb-8">
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {post.content}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
              <FiHeart size={20} />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
              <FiMessageCircle size={20} />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
              <FiShare2 size={20} />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Comentários</h3>
          <div className="space-y-4">
            <div className="text-gray-500 text-center py-8">
              Nenhum comentário ainda. Seja o primeiro a comentar!
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

