import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router'
import { P2Component } from './p2.component';

export const DefRoutes: Routes = [{
    path: '',
    component: P2Component,
}];
const routes: Routes = [
{
  path:'/', component: P2Component,
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DefRoutes),
    ],
    declarations: [
        P2Component,
    ],
    exports: [
    ],
    providers: [
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})

export class P2Module { }
