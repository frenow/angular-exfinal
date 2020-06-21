import { Component, Input } from "@angular/core";
import { IStates } from 'src/states';

@Component({
  selector: "map-brasil",
  templateUrl: "./mapBrasil.component.html",
  styleUrls: ["./mapBrasil.component.css"]
})
export class mapBrasil {
  @Input() states: IStates[];

  constructor() { }

  ngOnInit() { }

}
