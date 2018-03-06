import { Component, OnInit } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MedicoService } from '../../services/service.index';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {

  medicos: Medico[] = [];

  constructor(
    public _medicoService: MedicoService
  ) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos() {
    this._medicoService.cargarMedicos()
            .subscribe( resp => this.medicos = resp);
  }

  buscarMedico( termino: string ) {

    if (termino.length <= 0) {
      this.cargarMedicos();
      return;
    }

    this._medicoService.buscarMedicos( termino )
            .subscribe( resp => this.medicos = resp);

  }

  borrarMedico( medico: Medico ) {

    this._medicoService.borrarMedico( medico._id )
            .subscribe( () => this.cargarMedicos() );

  }

}
