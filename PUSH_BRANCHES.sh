#!/bin/bash
# Скрипт для загрузки всех веток в GitHub

echo "Убедитесь, что вы залогинены на GitHub с нужным аккаунтом"
echo "Используйте: git config --global user.email <your-email>"
echo ""

# Переключаемся на HTTPS с переинтерактивной авторизацией
git remote set-url origin https://github.com/nataliasleifman-pixel/ecommerce_react_demo.git

# Загружаем все ветки
branches=(
  "main"
  "feature/button-color-changes"
  "feature/adjust-spacing"
  "feature/text-changes"
  "feature/size-changes"
  "feature/background-borders"
)

for branch in "${branches[@]}"; do
  echo "📤 Загружаю $branch..."
  git push -u origin "$branch"
  if [ $? -eq 0 ]; then
    echo "✓ $branch успешно загружена"
  else
    echo "✗ Ошибка при загрузке $branch"
  fi
  echo ""
done

echo "Все готово! PR можно создавать на GitHub"
