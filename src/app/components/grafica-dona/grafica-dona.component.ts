import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() ChartLabels: string[] = [];
  @Input() ChartData: number[] = [];
  @Input() ChartType: string = '';



  constructor() { }

  ngOnInit() {
  }

}
