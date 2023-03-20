import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { P2Component } from './p2/p2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetWe';

  constructor (private router: Router){}

  changementDePage(pageName : string):void {
    this.router.navigate([`${pageName}`]);
  }
}


