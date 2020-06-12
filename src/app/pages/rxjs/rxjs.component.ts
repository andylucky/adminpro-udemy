import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, pipe, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

    subscripcion: Subscription;


  constructor( ) { 

   this.subscripcion= this.regresaObservable()
    .subscribe( 
      // numero =>console.log('Subs', numero ),
      // error => console.log('Error en el obs', error),
      // () => console.log("el observador terminó")
      )

  }


  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("la pagina se va a abandonar");
    this.subscripcion.unsubscribe();

  }

  regresaObservable(): Observable<number>{
    let contador = 0;
    return new Observable( (observer:Subscriber<any>) =>{
      let intervalo = setInterval(()=>{
        //este observable va a estar notificando mediante este next cada vez que
        //la informacion llegue. Cada vez que quieran notificar al codigo al cual se van a susbscribir
        //llamaremos a la funcion nex
        contador += 1;

        const salida = {
          valor: contador
        }

        observer.next(salida);

        // if(contador === 3){
        //   debugger
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if(contador === 2){
        //   debugger
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio')
        // }

      },1000)

    }).pipe(
       map( resp=> resp.valor ),
       filter( (valor, index)=>{

        if(valor % 2 === 1){
          return true
        }
        else{
          return false;
        }
       }
       
    )

  )}

}
