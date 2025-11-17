#!/bin/bash

# Script para publicar o projeto no GitHub
# Uso: ./publish-to-github.sh SEU_USUARIO

if [ -z "$1" ]; then
    echo "❌ Erro: Por favor, forneça seu username do GitHub"
    echo "Uso: ./publish-to-github.sh SEU_USUARIO"
    exit 1
fi

USERNAME=$1
REPO_NAME="site-pucc"

echo "🚀 Preparando para publicar no GitHub..."
echo ""

# Verificar se já existe um remote chamado 'github'
if git remote | grep -q "^github$"; then
    echo "⚠️  Remote 'github' já existe. Removendo..."
    git remote remove github
fi

# Adicionar novo remote
echo "📡 Adicionando repositório remoto..."
git remote add github https://github.com/$USERNAME/$REPO_NAME.git

echo ""
echo "✅ Remote configurado!"
echo ""
echo "📋 Próximos passos:"
echo "1. Crie o repositório '$REPO_NAME' no GitHub (github.com/new)"
echo "2. Execute: git push -u github master"
echo ""
echo "Ou se a branch principal for 'main':"
echo "   git push -u github master:main"

