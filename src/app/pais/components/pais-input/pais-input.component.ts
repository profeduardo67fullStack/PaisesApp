import { Component,EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter();  //Con esto vamos a emitir el this.termino,para que pueda ser enviado
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //Este se emite cuando la persona deje de escribir

  debouncer: Subject<string> = new Subject();//Asi se crea un Subject
  
      termino: string ='';


  ngOnInit() {//Esto se dispara una única vez, cuando el componente es creado
    this.debouncer
    .pipe(debounceTime(300)//Que tiempo quieres esperar antes de emitir el siguiente valor
    )
    .subscribe(valor => {//Con esto se está suscribiendo a este debouncer
      this.onDebounce.emit(valor);
      // console.log('debouncer:', valor);Ahora ya no se manda el valor a consola, sino ya se emite el valor
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);//Cuando se ocupe el método buscar con el enter, se va a emitir el this.termino
  }

  /**Creamos el evento teclaPresionada() */

  // teclaPresionada(event: any){
  //   const valor = event.target.value;
  //   console.log(valor);

  //   console.log(this.termino);
  // }Con esto estamos mandando el $event

  teclaPresionada(event: any){
    this.debouncer.next(this.termino);

    
    }

}
