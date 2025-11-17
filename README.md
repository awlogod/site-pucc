# 🎓 PUC Campinas - Plataforma de Estudos

Plataforma colaborativa inspirada no Mercado Livre, desenvolvida para alunos da PUC Campinas compartilharem resumos, provas antigas e lembretes.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Funcionalidades

- 📝 **Resumos**: Compartilhe resumos de matérias com outros alunos
- 📄 **Provas Antigas**: Poste fotos de provas anteriores para ajudar na preparação
- 🔔 **Lembretes**: Crie lembretes de provas e eventos importantes
- 🔍 **Busca**: Encontre materiais por tags e palavras-chave
- 👤 **Perfis**: Visualize perfis de outros alunos e seus posts
- 🎨 **Interface Moderna**: Design inspirado no Mercado Livre, limpo e intuitivo

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **React Icons** - Biblioteca de ícones
- **date-fns** - Formatação de datas

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/site-pucc.git
cd site-pucc
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
site_pucc/
├── app/                    # Páginas e rotas (App Router)
│   ├── criar/             # Página de criação de posts
│   ├── post/[id]/         # Visualização de post individual
│   ├── perfil/[id]/       # Página de perfil do usuário
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React reutilizáveis
│   ├── Header.tsx         # Cabeçalho com busca e navegação
│   ├── Footer.tsx         # Rodapé
│   ├── Feed.tsx           # Feed de posts
│   ├── PostCard.tsx       # Card de post individual
│   └── Sidebar.tsx        # Barra lateral com ações rápidas
├── types/                 # Definições TypeScript
│   └── index.ts           # Tipos de Post e User
└── public/                # Arquivos estáticos
```

## 🎯 Páginas Principais

- **/** - Página inicial com feed de posts
- **/criar** - Criar novo post (resumo, prova ou lembrete)
- **/post/[id]** - Visualizar post completo
- **/perfil/[id]** - Perfil do usuário com estatísticas

## 🛠️ Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

## 📝 Próximos Passos

- [ ] Integração com banco de dados
- [ ] Sistema de autenticação
- [ ] Upload real de imagens
- [ ] Sistema de comentários funcional
- [ ] Busca avançada
- [ ] Notificações em tempo real
- [ ] Sistema de favoritos

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido para a comunidade de alunos da PUC Campinas.

---

⭐ Se este projeto foi útil, considere dar uma estrela!

