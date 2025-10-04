import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent: () => import('./gifts/pages/dashboard-page/dashboard-page')
        // lazy loading -> it's needed to be 'export default class' from dashboard-page.ts
    },

    {
        path: "**",
        redirectTo:'dashboard'
    }
];
