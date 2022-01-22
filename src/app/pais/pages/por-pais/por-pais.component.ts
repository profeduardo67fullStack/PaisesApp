import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

   /**Definimos la propiedad para utilizar el NgModel, del html */
   termino: string = '';

  constructor(private paisService: PaisService) { }//Aca inyectamos nuesto servicio, para poder consumirlo

  /**Implementamos el método de buscar */
  buscar(){
    console.log(this.termino);

    //hay que recordar que para que un observable se dispare, hay que tener almenos un subscribe
    this.paisService.buscarPais(this.termino).subscribe(resp => {
      console.log(resp);//Por ahorita mandamos a pintar el resultado de la búsqueda
    });
  }

  

}
