import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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



}
