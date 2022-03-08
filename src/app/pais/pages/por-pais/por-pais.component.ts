import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
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

   /**Para el manejo de errores creamos otra propiedad */
  hayError: boolean = false;

  /**Creamos una propiedad para llenar las columnas con los paises */
  paises : Country[] = [];


  constructor(private paisService: PaisService) { }//Aca inyectamos nuesto servicio, para poder consumirlo

  /**Implementamos el método de buscar */
  buscar(termino: string){
    this.hayError = false;
    this.termino=termino;

    //hay que recordar que para que un observable se dispare, hay que tener almenos un subscribe
    this.paisService.buscarPais(this.termino).subscribe(paises => {//En este caso del observable, esta seria la parte del next
      console.log(paises);//Por ahorita mandamos a pintar el resultado de la búsqueda
      this.paises = paises;
    
    
    }, (err) => {
      this.hayError = true;
      this.paises = [];//Si dá error pinto un arreglo con paises vacios
    });
  }

  sugerencias(termino: string){
      this.hayError=false;
      //TODO: Crear Sugerencias
  }
  
}
