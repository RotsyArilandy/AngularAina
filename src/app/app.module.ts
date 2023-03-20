import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
{
  path:'p2',
  loadChildren: () => import('src/app/p2/p2.module').then(m => (m).P2Module)
},
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule ,RouterModule.forRoot(routes)],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
