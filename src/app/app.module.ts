import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { SearchbooksComponent } from './searchbooks/searchbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { DeletebooksComponent } from './deletebooks/deletebooks.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbooksComponent,
    SearchbooksComponent,
    ViewbooksComponent,
    DeletebooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
