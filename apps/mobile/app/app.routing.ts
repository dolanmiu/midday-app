// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// app
import { SharedModule } from './modules/shared/shared.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'items',
        loadChildren: './modules/items/items.module#ItemsModule',
    },
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule',
    },
];

@NgModule({
    imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
