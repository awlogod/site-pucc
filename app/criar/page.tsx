'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { FiUpload, FiX } from 'react-icons/fi'

function CriarPostContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const tipoParam = searchParams.get('tipo')
  
  const [tipo, setTipo] = useState<'resumo' | 'prova' | 'lembrete'>(
    (tipoParam as 'resumo' | 'prova' | 'lembrete') || 'resumo'
  )
  const [titulo, setTitulo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [tags, setTags] = useState('')
  const [imagem, setImagem] = useState<File | null>(null)
  const [imagemPreview, setImagemPreview] = useState<string | null>(null)
  const [dataLembrete, setDataLembrete] = useState('')

  useEffect(() => {
    if (tipoParam) {
      setTipo(tipoParam as 'resumo' | 'prova' | 'lembrete')
    }
  }, [tipoParam])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImagem(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagemPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você faria a requisição para salvar o post
    console.log({ tipo, titulo, conteudo, tags, imagem, dataLembrete })
    alert('Post criado com sucesso!')
    router.push('/')
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Criar Novo Post</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        {/* Tipo de Post */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Post
          </label>
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setTipo('resumo')}
              className={`p-4 border-2 rounded-lg text-center transition-colors ${
                tipo === 'resumo'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">📝</div>
              <div className="font-medium">Resumo</div>
            </button>
            <button
              type="button"
              onClick={() => setTipo('prova')}
              className={`p-4 border-2 rounded-lg text-center transition-colors ${
                tipo === 'prova'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">📄</div>
              <div className="font-medium">Prova Antiga</div>
            </button>
            <button
              type="button"
              onClick={() => setTipo('lembrete')}
              className={`p-4 border-2 rounded-lg text-center transition-colors ${
                tipo === 'lembrete'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-2xl mb-2">🔔</div>
              <div className="font-medium">Lembrete</div>
            </button>
          </div>
        </div>

        {/* Título */}
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700 mb-2">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Ex: Resumo de Cálculo I - Limites"
          />
        </div>

        {/* Conteúdo */}
        <div>
          <label htmlFor="conteudo" className="block text-sm font-medium text-gray-700 mb-2">
            Conteúdo
          </label>
          <textarea
            id="conteudo"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            required
            rows={8}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Digite o conteúdo do seu post..."
          />
        </div>

        {/* Upload de Imagem (para provas) */}
        {tipo === 'prova' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Foto da Prova
            </label>
            {imagemPreview ? (
              <div className="relative">
                <img
                  src={imagemPreview}
                  alt="Preview"
                  className="w-full h-64 object-contain border border-gray-300 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImagem(null)
                    setImagemPreview(null)
                  }}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                >
                  <FiX size={20} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUpload className="text-gray-400 mb-2" size={24} />
                  <p className="text-sm text-gray-500">Clique para fazer upload</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>
        )}

        {/* Data do Lembrete */}
        {tipo === 'lembrete' && (
          <div>
            <label htmlFor="dataLembrete" className="block text-sm font-medium text-gray-700 mb-2">
              Data do Evento
            </label>
            <input
              type="datetime-local"
              id="dataLembrete"
              value={dataLembrete}
              onChange={(e) => setDataLembrete(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        )}

        {/* Tags */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
            Tags (separadas por vírgula)
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Ex: Cálculo, Matemática, Engenharia"
          />
        </div>

        {/* Botões */}
        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Publicar
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default function CriarPost() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Carregando...</div>}>
      <CriarPostContent />
    </Suspense>
  )
}

