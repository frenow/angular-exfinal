import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "form-search",
  templateUrl: "./formSearch.component.html",
  styleUrls: ["./formSearch.component.css"]
})
export class formSearch {
  @Output() SearchCity = new EventEmitter<string>();

  filter: string;

  onInputChange(city: string) {    
    this.SearchCity.emit(city);
  }
}