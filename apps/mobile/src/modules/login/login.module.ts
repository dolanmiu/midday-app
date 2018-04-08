import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
];

@NgModule({
    imports: [SharedModule, NativeScriptRouterModule.forChild(routes)],
    declarations: [LoginComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class LoginModule {}
