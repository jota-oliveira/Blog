import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoAvatarModule, PoPageModule, PoToolbarModule, PoMenuModule, PoContainerModule, PoDividerModule } from '@po-ui/ng-components';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PoAvatarModule,
    PoPageModule,
    PoContainerModule,
    PoDividerModule,
    PoAvatarModule,
    HomeRoutingModule,
    MarkdownModule.forChild()
  ]
})
export class HomeModule { }
