import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { covidService } from "../../services/covidService";
import { ICities } from "../../cities";

@Component({
  selector: "state",
  templateUrl: "./state.component.html",
  styleUrls: ["./state.component.css"]
})
export class state {
  cities: ICities[];
  uf: string;

  constructor(private route: ActivatedRoute, private covid: covidService) {
    this.cities = [];
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.uf = params["uf"];
    });
    console.log(this.uf);

    this.covid.getUF(this.uf).subscribe(data => {
      console.log('xxxx '+data.results[0]);
      data.results.map(data =>
        this.cities.push({
          city: data.city,
          state: data.state.toLowerCase(),
          confirmed: data.confirmed,
          deaths: data.deaths,
          date: data.date
        })
      );
    });
  }

}
