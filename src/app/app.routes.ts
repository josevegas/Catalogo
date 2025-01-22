import { Routes } from '@angular/router';
import {LayoutComponent} from './shared/components/layout/layout.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { ProfileComponent } from './business/profile/profile.component';
import { TablesComponent } from './business/tables/tables.component';
import { GlutenfreeComponent } from './business/glutenfree/glutenfree.component';
import { DairyfreeComponent } from './business/dairyfree/dairyfree.component';
import { DetailComponent } from './shared/components/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: DashboardComponent,
                title: 'Inicio',
            },
            {
                path: 'vegan',
                component: ProfileComponent,
                title: 'Vegano',
            },
            {
                path: 'vegetarian',
                component: TablesComponent,
                title: 'Vegetariano',
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'glutenfree',
                component: GlutenfreeComponent,
                title: 'Libre de Gluten'
            },
            {
                path: 'dairyfree',
                component: DairyfreeComponent,
                title: 'Libre de Lácteos'
            },
            {
                path: 'detail/:id',
                component: DetailComponent,
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];
