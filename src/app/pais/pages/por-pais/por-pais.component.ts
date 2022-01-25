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

   /**Para el manejo de errores creamos otra propiedad */
  hayError: boolean = false;


  constructor(private paisService: PaisService) { }//Aca inyectamos nuesto servicio, para poder consumirlo

  /**Implementamos el método de buscar */
  buscar(){
    this.hayError = false;
    console.log(this.termino);

    //hay que recordar que para que un observable se dispare, hay que tener almenos un subscribe
    this.paisService.buscarPais(this.termino).subscribe(resp => {//En este caso del observable, esta seria la parte del next
      console.log(resp);//Por ahorita mandamos a pintar el resultado de la búsqueda
    }, (err) => {
      this.hayError = true;

      // console.log('Error');
      // console.info(err);
    });
  }

  

}
