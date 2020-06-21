import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../modules/AppRoutingModule';
import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { homePage } from "../components/homePage/homePage.component";
import { mapBrasil } from "../components/mapBrasil/mapBrasil.component";
import { state } from "../components/state/state.component";
import { formSearch } from "../components/formSearch/formSearch.component";


@NgModule({
  declarations: [
    AppComponent, homePage, mapBrasil, state, formSearch
  ],
  imports: [ BrowserModule, HttpClientModule, AppRoutingModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
