import { Component, Input } from "@angular/core";
import { IStates } from 'src/states';
import { state } from '../state/state.component';

@Component({
    selector: 'piechart',
    templateUrl: './pieChart.component.html',
    styleUrls: ['./pieChart.component.css']
  })
export class pieChart {
  @Input() states: IStates[];
  
  // Pie                           //0    1    2    3    4    5    6
  public pieChartLabels:string[] = ['SP','RJ','MG','AM','PA','CE','PE'];
  public pieChartData:number[] =   [ 40,  20,  15 , 10,  5,    5,  5];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }
 
  public chartHovered(e:any):void {
    //console.log(e);
  }

  constructor() { }

  ngAfterViewInit() { 
    console.log(this.states[22]);
    this.pieChartData[0] = (this.states[22] && Number(this.states[22].deaths));
    this.pieChartData[1] = (this.states[17] && Number(this.states[17].deaths));
    this.pieChartData[2] = (this.states[10] && Number(this.states[10].deaths));
    this.pieChartData[3] = (this.states[2] && Number(this.states[2].deaths));
    this.pieChartData[4] = (this.states[12] && Number(this.states[12].deaths));
    this.pieChartData[5] = (this.states[5] && Number(this.states[5].deaths));
    this.pieChartData[6] = (this.states[14] && Number(this.states[14].deaths));
  }


}