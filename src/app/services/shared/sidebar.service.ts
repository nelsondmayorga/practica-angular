import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenus: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'ProgressBar', url: '/progress'},
        {titulo: 'Graficas', url: '/graficas1'},
        {titulo: 'Promesas', url: '/promesas'},
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenus: [
        {titulo: 'Usuarios', url: '/usuarios'},
        {titulo: 'Hospitales', url: '/hospitales'},
        {titulo: 'Médicos', url: '/medicos'}
      ]
    }
  ];

  constructor() { }

}
