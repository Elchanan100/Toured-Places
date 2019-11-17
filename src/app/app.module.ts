import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/generel/header/header.component';
import { NavigationComponent } from './components/generel/navigation/navigation.component';
import { PaginatorComponent } from './components/generel/paginator/paginator.component';
import { FooterComponent } from './components/generel/footer/footer.component';
import { PanelBodyComponent } from './components/generel/panel-body/panel-body.component';
import { EverythingComponent } from './components/generel/everything/everything.component';
import { HotelsPanelComponent } from './components/Panels/hotels-panel/hotels-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    PaginatorComponent,
    FooterComponent,
    PanelBodyComponent,
    EverythingComponent,
    HotelsPanelComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
