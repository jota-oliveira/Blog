import { Component, OnInit } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public httpClient: HttpClient) {}


  public ngOnInit(): void {
    // this.httpClient.get('')
    //   .subscribe(
    //     sucesso => console.log(sucesso),
    //     erro => console.log(erro)
    //   );
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Bem vindo!', action: this.onClick.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item');
  }

}
