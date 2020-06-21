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
  listCities: ICities[];

  uf: string;

  constructor(private route: ActivatedRoute, private covid: covidService) {
    this.cities = [];
    this.listCities = this.cities; 
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.uf = params["uf"];
    });

    this.covid.getUF(this.uf).subscribe(data => {
      
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

  onSearchCity(city: string) {
    if (city === "") {
      this.cities = this.listCities;
    }
    this.cities = this.cities.filter(
      item => (item.city && item.city.toLowerCase().indexOf(city.toLowerCase()) !== -1)
    );
  }
}
