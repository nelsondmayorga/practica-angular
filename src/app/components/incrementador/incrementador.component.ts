import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  onChanges(nuevoValor: number) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );

  }

  cambiarValor(valor: number) {

    if (this.progreso >= 100) {
      this.progreso = 100;
    }

    if (this.progreso <= 0) {
      this.progreso = 0;
    }

    this.progreso += valor;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();

  }

}
