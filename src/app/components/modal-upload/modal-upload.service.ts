import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  public tipo: string;
  public id: string;

  public oculto: string = 'oculto';
  
  public notification = new EventEmitter<any>();

  constructor() { }

  ocutlarModal() {
    this.oculto = 'oculto';
    this.id = null;
    this.tipo = null;
  }

  mostrarModal( tipo: string, id: string ) {
    this.oculto = '';
    this.id = id;
    this.tipo = tipo;
  }



}

