# 📤 Como Publicar no GitHub

## ✅ Passo 1: Commit Realizado

O commit inicial já foi feito com sucesso! Todos os arquivos estão prontos.

## 🆕 Passo 2: Criar Repositório no GitHub

1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `site-pucc` (ou outro nome de sua preferência)
   - **Description**: "Plataforma de estudos colaborativa para alunos da PUC Campinas"
   - **Visibility**: Escolha Público ou Privado
   - ⚠️ **NÃO** marque "Initialize with README" (já temos um)
   - ⚠️ **NÃO** adicione .gitignore ou license (já temos)
5. Clique em **"Create repository"**

## 🔗 Passo 3: Conectar ao Repositório Remoto

Após criar o repositório, o GitHub mostrará instruções. Execute no terminal:

```bash
cd /Users/dede/Documents/projetos/site_pucc

# Adicione o repositório remoto (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/site-pucc.git

# Ou se preferir usar SSH:
# git remote add origin git@github.com:SEU_USUARIO/site-pucc.git
```

## 📤 Passo 4: Enviar para o GitHub

```bash
# Envie o código para o GitHub
git push -u origin master

# Se der erro porque a branch é 'main' ao invés de 'master':
# git push -u origin master:main
```

## ✨ Próximos Passos

Após o push, você pode:

1. **Visualizar no GitHub**: Acesse `https://github.com/SEU_USUARIO/site-pucc`
2. **Adicionar descrição**: Edite o repositório e adicione tags/tópicos
3. **Deploy**: Considere fazer deploy na Vercel (gratuito para Next.js):
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu repositório GitHub
   - Deploy automático!

## 🔄 Comandos Úteis para Futuro

```bash
# Ver status
git status

# Adicionar mudanças
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push

# Atualizar do GitHub
git pull
```

## 📝 Nota sobre node_modules

O arquivo `.gitignore` já está configurado para **não** enviar:
- `node_modules/` (dependências)
- `.next/` (build do Next.js)
- Arquivos de ambiente (`.env`)

Isso mantém o repositório leve e seguro!

