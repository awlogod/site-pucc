import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PUC Campinas</h3>
            <p className="text-gray-400 text-sm">
              Plataforma de estudos colaborativa para alunos da PUC Campinas
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/sobre" className="hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/ajuda" className="hover:text-white">
                  Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/resumos" className="hover:text-white">
                  Resumos
                </Link>
              </li>
              <li>
                <Link href="/provas" className="hover:text-white">
                  Provas Antigas
                </Link>
              </li>
              <li>
                <Link href="/lembretes" className="hover:text-white">
                  Lembretes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 PUC Campinas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

