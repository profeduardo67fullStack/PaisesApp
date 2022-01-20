import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  /*Esto afectará solo a los li, que esten en este componente no en general a todos los li de la aplicación */
  styles: [
    
    `
        li{
          cursor: pointer;
        }
    
    
    `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
