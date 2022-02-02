import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter  //Con esto vamos a emitir el this.termino,para que pueda ser enviado
  
  
  

  termino: string ="";

  buscar(){
    this.onEnter.emit(this.termino);//Cuando se ocupe el método buscar con el enter, se va a emitir el this.termino
  }

}
