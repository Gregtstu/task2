import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/shared/main-layout/main-layout.component';
import { KassaComponent } from './pages/kassa/kassa.component';
import { ParahodComponent } from './pages/parahod/parahod.component';
import { TabloComponent } from './pages/tablo/tablo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    KassaComponent,
    ParahodComponent,
    TabloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
