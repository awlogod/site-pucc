'use client'

import { FiPlus, FiTrendingUp, FiClock } from 'react-icons/fi'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="space-y-6">
      {/* Create Post Button */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <Link
          href="/criar"
          className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
        >
          <FiPlus size={20} />
          <span>Criar Post</span>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold text-gray-800 mb-4">Ações Rápidas</h3>
        <div className="space-y-2">
          <Link
            href="/criar?tipo=resumo"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            📝 Novo Resumo
          </Link>
          <Link
            href="/criar?tipo=prova"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            📄 Postar Prova
          </Link>
          <Link
            href="/criar?tipo=lembrete"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            🔔 Novo Lembrete
          </Link>
        </div>
      </div>

      {/* Trending */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-2 mb-4">
          <FiTrendingUp className="text-primary-500" />
          <h3 className="font-semibold text-gray-800">Em Alta</h3>
        </div>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="text-primary-500 font-bold">1</span>
            <div>
              <p className="text-sm font-medium text-gray-800">Cálculo I</p>
              <p className="text-xs text-gray-500">45 posts</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-primary-500 font-bold">2</span>
            <div>
              <p className="text-sm font-medium text-gray-800">Física II</p>
              <p className="text-xs text-gray-500">32 posts</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-primary-500 font-bold">3</span>
            <div>
              <p className="text-sm font-medium text-gray-800">Química Orgânica</p>
              <p className="text-xs text-gray-500">28 posts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center space-x-2 mb-4">
          <FiClock className="text-primary-500" />
          <h3 className="font-semibold text-gray-800">Recentes</h3>
        </div>
        <div className="space-y-3 text-sm text-gray-600">
          <p>• Novo resumo de Cálculo I</p>
          <p>• Prova de Física II adicionada</p>
          <p>• Lembrete: Prova de Química</p>
        </div>
      </div>
    </div>
  )
}

