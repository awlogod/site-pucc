'use client'

import { Post } from '@/types'
import { formatDistanceToNow } from 'date-fns'
import { FiHeart, FiMessageCircle, FiShare2, FiBook, FiFileText, FiBell } from 'react-icons/fi'
import Link from 'next/link'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
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
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-primary-600 font-semibold">
              {post.author.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <Link href={`/perfil/${post.authorId}`} className="font-semibold text-gray-800 hover:text-primary-500">
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

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 line-clamp-3">{post.content}</p>
        {post.imageUrl && (
          <div className="mt-4 rounded-lg overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}
        {post.dueDate && (
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Data:</strong> {post.dueDate.toLocaleDateString('pt-BR')}
            </p>
          </div>
        )}
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
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
        <Link
          href={`/post/${post.id}`}
          className="text-primary-500 hover:text-primary-600 font-medium text-sm"
        >
          Ver mais →
        </Link>
      </div>
    </div>
  )
}

