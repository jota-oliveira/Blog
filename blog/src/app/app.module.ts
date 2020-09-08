import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoAvatarModule, PoPageModule, PoToolbarModule, PoMenuModule } from '@po-ui/ng-components';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PoAvatarModule,
    PoPageModule,
    PoToolbarModule,
    PoMenuModule,
    PoAvatarModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: true,
          pedantic: true,
          smartLists: true,
          smartypants: true,
        }
      },
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
