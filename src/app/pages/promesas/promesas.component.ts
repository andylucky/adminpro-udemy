import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
          mensaje=>console.log(mensaje)
         
        )
        .catch( error => console.error("error en la promesa"));

   }

  ngOnInit() {
  }

  contarTres(): Promise<any>{
    let promesa= new Promise(  (resolve, reject) => {
      let contador = 0;
      let intervaldo = setInterval( ()=>{
        contador+=1;
        console.log(contador)
        if(contador ===3) {
          
          resolve(true);
          clearInterval(intervaldo)
         
        
        }
      },1000 );
     
    });
    return promesa;
  }

}
