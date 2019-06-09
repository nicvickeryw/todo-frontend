import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../components/layout/page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from '../components/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
        }),
    ],
    exports: [RouterModule],
})
export class RoutingModule {}
