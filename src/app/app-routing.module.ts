import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    // {
    //     path: 'home',
    //     component: LandingPageComponent
    // },
    // {
    //     path: 'leave',
    //     loadChildren: 'app/leave/leave.module#LeaveModule'
    // },
    // {
    //     path: 'orgsetup',
    //     loadChildren: 'app/orgsetup/orgsetup.module#OrgsetupModule'
    // },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
