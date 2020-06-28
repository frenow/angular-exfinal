import { Component } from "@angular/core";
import { covidService } from "../../services/covidService";
import { IStates } from "../../states";

@Component({
  selector: "home-page",
  templateUrl: "./homePage.component.html",
  styleUrls: ["./homePage.component.css"]
})
export class homePage {
  states: IStates[];

  constructor(private covid: covidService) {
    this.states = [];
   }

  ngOnInit() {
    this.covid.getBR().subscribe(data => {
      //console.log(data.results[0]);
      data.results.map(data =>
        this.states.push({
          state: data.state,
          confirmed: data.confirmed,
          deaths: data.deaths,
          date: data.date
        })
      );
    });
  }

}
