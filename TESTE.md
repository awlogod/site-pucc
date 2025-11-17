# Guia de Testes - PUC Campinas

## 🚀 Servidor em Execução

O servidor de desenvolvimento está rodando em: **http://localhost:3000**

## 📋 Checklist de Testes

### 1. Página Inicial (Home)
- [ ] Verificar se o header está exibindo corretamente
- [ ] Verificar se a barra de busca está visível
- [ ] Verificar se os filtros (Todos, Resumos, Provas, Lembretes) estão funcionando
- [ ] Verificar se a sidebar está exibindo as ações rápidas
- [ ] Verificar se o footer está no final da página

### 2. Criar Post
- [ ] Acessar `/criar` ou clicar em "Criar Post"
- [ ] Testar seleção de tipo de post (Resumo, Prova, Lembrete)
- [ ] Preencher formulário de resumo:
  - [ ] Título
  - [ ] Conteúdo
  - [ ] Tags
- [ ] Testar upload de imagem (para provas)
- [ ] Testar campo de data (para lembretes)
- [ ] Verificar validação de campos obrigatórios

### 3. Visualizar Post
- [ ] Clicar em "Ver mais" em um post
- [ ] Verificar se o conteúdo completo está sendo exibido
- [ ] Verificar se as tags estão visíveis
- [ ] Verificar botões de ação (curtir, comentar, compartilhar)
- [ ] Testar botão "Voltar"

### 4. Perfil de Usuário
- [ ] Acessar `/perfil/user1` (ou outro ID)
- [ ] Verificar informações do usuário
- [ ] Verificar estatísticas (posts, curtidas, comentários)
- [ ] Verificar lista de posts do usuário

### 5. Responsividade
- [ ] Testar em diferentes tamanhos de tela
- [ ] Verificar menu mobile (botão hambúrguer)
- [ ] Verificar se a sidebar some em telas pequenas
- [ ] Testar barra de busca mobile

### 6. Navegação
- [ ] Testar links do header
- [ ] Testar links do footer
- [ ] Testar navegação entre páginas
- [ ] Verificar se o logo redireciona para home

## 🐛 Problemas Conhecidos

Atualmente, os dados são mockados (simulados). Para funcionalidade completa, será necessário:
- Integração com banco de dados
- Sistema de autenticação
- Upload real de imagens
- Sistema de comentários funcional

## 🔍 Como Testar Funcionalidades Específicas

### Testar Filtros
1. Na página inicial, clique nos botões de filtro
2. Verifique se os posts são filtrados corretamente
3. Teste alternar entre "Todos", "Resumos", "Provas" e "Lembretes"

### Testar Criação de Post
1. Clique em "Criar Post" ou acesse `/criar`
2. Selecione um tipo de post
3. Preencha todos os campos
4. Para provas, teste o upload de imagem
5. Para lembretes, preencha a data
6. Clique em "Publicar"

### Testar Busca
1. Digite algo na barra de busca
2. Verifique se há feedback visual
3. (Nota: A busca ainda não está implementada funcionalmente)

## 📱 Testar em Dispositivos Móveis

1. Abra o DevTools do navegador (F12)
2. Ative o modo responsivo (Ctrl+Shift+M ou Cmd+Shift+M)
3. Teste diferentes tamanhos de tela
4. Verifique se todos os elementos estão acessíveis

## 🛑 Parar o Servidor

Para parar o servidor, pressione `Ctrl+C` no terminal onde está rodando.

