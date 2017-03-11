import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent }     from './welcome/welcome.component';
import { TestComponent}         from './test/test.component';
import { ResultComponent}         from './result/result.component';


const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome',  component: WelcomeComponent },
    { path: 'test/:id',  component: TestComponent },
    { path: 'result/:id',  component: ResultComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}