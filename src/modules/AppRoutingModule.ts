import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { CommonModule } from '@angular/common';
import { AppComponent } from "../app/app.component";
import { homePage } from "../components/homePage/homePage.component";
import { mapBrasil } from "../components/mapBrasil/mapBrasil.component";
import { state } from "../components/state/state.component";

const routes: Routes = [
    { path: "", component: homePage },
    { path: "mapBrasil", component: mapBrasil },
    { path: "state/:uf", component: state },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
