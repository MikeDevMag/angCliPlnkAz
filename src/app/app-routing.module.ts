import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
 { path: 'test', pathMatch: 'full', component: TestComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, TestComponent];