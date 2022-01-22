import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  /**Creamos una propiedad para traer el EndPoint */

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  /**Para hacer las peticiones se puede trabajar con el FetchAPI, pero es conveniente trabajar mejor con 
   * HttpCommon, que ya viene en Angular, por que trabaja con rxjs, que es más poderoso
   */

  /**Creamos un método para las busquedas */

  buscarPais(termino: string): Observable<any>{//Método que recibe el término y regresa un Observable

    /**Contruimos la url de búsqueda */
    const url = `${this.apiURL}/name/${termino}`;

    //this.http.get(url).subscribe();//El subscribe se utiliza para hacer que esto se ejecute

    //Si no se quiere retornar la información dentro del servicio, sino al que sea que mando a llamar buscar país
    return this.http.get(url);

  }

}
