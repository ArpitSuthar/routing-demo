import { Component, OnInit } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Dashboard', routerLink: 'dashboard'},
      {label: 'Template Driven Form', routerLink: 'template-form'},
      { label: 'Reactive Form', routerLink: 'reactive-form'}
  ];
  }
}
