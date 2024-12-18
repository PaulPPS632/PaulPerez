import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path:'',
        loadComponent: ()=> import('./pages/layout/layout.component').then((m)=> m.LayoutComponent),
        children:[
            {
                path:'',
                loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
            },
            {
                path: 'projects',
                loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent)
            },
            {
                path:'project/:nombre',
                loadComponent: () => import('./pages/project/project.component').then((m) => m.ProjectComponent)
            }
        ]
    },
    
];
