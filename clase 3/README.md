
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

template: 
https://www.creative-tim.com/twcomponents/component/dashboard-navigation

creating dashboard-page component:
ng g c gifts/pages/dashboard-page --skip-tests --inline-style