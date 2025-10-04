
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

creating trending-page component:
ng g c gifts/pages/trending-page --skip-tests --inline-style

creating search-page component:
ng g c gifts/pages/search-page --skip-tests --inline-style

(edit the .ts file to 'export default class')

creating side-menu components:
ng g c gifts/components/side-menu/side-menu-header --skip-tests --inline-style
ng g c gifts/components/side-menu/side-menu-options --skip-tests --inline-style

ng g c gifts/components/side-menu --skip-tests --inline-style

importing icons: 
https://cdnjs.com/libraries/font-awesome,
https://fontawesome.com/icons