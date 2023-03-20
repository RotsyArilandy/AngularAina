import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {Routes, RouterModule} from '@angular/router'
import { P2Component } from './p2/p2.component';

const routes: Routes = [
{
  path:'p2', component: P2Component
}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    P2Component
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
