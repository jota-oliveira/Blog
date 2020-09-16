import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Início',
      link: '/home',
      icon: 'po-icon-home'
    },
    {
      label: 'Posts',
      link: '/home/posts',
      icon: 'po-icon-news'
    },
    {
      label: 'Github',
      link: 'https://github.com/jota-oliveira',
      icon: 'po-icon-social-github'
    }
  ];

}
