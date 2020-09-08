import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoAvatarModule, PoPageModule, PoToolbarModule, PoMenuModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoAvatarModule,
    PoPageModule,
    PoToolbarModule,
    PoMenuModule,
    PoAvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
