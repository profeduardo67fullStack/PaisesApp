import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

   /**Definimos la propiedad para utilizar el NgModel, del html */
   termino: string = '';

  constructor() { }

  /**Implementamos el método de buscar */
  buscar(){
    console.log(this.termino);
  }

  

}
