import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent: () => import('./gifts/pages/dashboard-page/dashboard-page'),
        // lazy loading -> it's needed to be 'export default class' from dashboard-page.ts
        
        children: [
            {
                path: "trending",
                loadComponent: () => import('./gifts/pages/trending-page/trending-page')
            },

            {
                path: "search",
                loadComponent: () => import('./gifts/pages/search-page/search-page')
            },
            {
                path: "**",
                redirectTo:'trending'
            }
        ]
    },

    {
        path: "**",
        redirectTo:'dashboard'
    }
];
