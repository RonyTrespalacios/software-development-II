
npx @angular/cli new gift-app

npm install tailwindcss @tailwindcss/postcss postcss --force

.postcssrc.json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}

styles.css
@import "tailwindcss";