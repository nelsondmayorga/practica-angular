import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
      this.cargarAjustes();
   }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {

    if ( localStorage.getItem('ajustes') ){

      // Cargando del localstorage
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      this.aplicarTema( this.ajustes.tema );
    } else {
      // Valores por defecto
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema(tema: string){

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute( 'href', url);


    // Directamente
    // document.getElementById('tema').setAttribute('href', color);

    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;

    this.guardarAjustes();
  }

}

interface Ajustes {

  temaUrl: string;
  tema: string;

}