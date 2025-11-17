'use client'

import { useState } from 'react'
import { FiSearch, FiUser, FiBell, FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
              PUC
            </div>
            <span className="text-gray-800 font-semibold hidden sm:block">
              Campinas
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar resumos, provas, materiais..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search */}
            <button className="md:hidden p-2 text-gray-600 hover:text-primary-500">
              <FiSearch size={20} />
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-primary-500">
              <FiBell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button className="flex items-center space-x-2 p-2 text-gray-600 hover:text-primary-500">
                <FiUser size={20} />
                <span className="hidden sm:block">Entrar</span>
              </button>
            </div>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar resumos, provas, materiais..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

