import { Component } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public breadcrumbConfiguration: PoBreadcrumb = {
    items: [
      { label: 'Início', link: '/home' }
    ]
  };

}
