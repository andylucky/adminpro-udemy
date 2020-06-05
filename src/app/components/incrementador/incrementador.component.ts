import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  //recibe una referencia a un elmento html
  @ViewChild ('txtProgress',{static: false} ) txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso: number = 50;
  @Output() sumoValor: EventEmitter<number> = new EventEmitter();
  @Output() restarValor: EventEmitter<number> = new EventEmitter();
  
  constructor() {


   }

  ngOnInit() {
    console.log(this.progreso);
  }

  onChanges(newValue:number) {

    //let elemHTMl: any = document.getElementsByName('progreso')[0];
    //console.log(elemHTMl.value);
  
    if(newValue > this.progreso){
      if(newValue>100){
        this.sumoValor.emit(100);
      }
      else{ this.sumoValor.emit(newValue);
      }
    }
    else{

      if(newValue<0){
        this.restarValor.emit(0);
      }
      else{ 
        this.restarValor.emit(newValue);
      }
    }
    //elemHTMl.value = this.progreso
    this.txtProgress.nativeElement.value= this.progreso;

  }

  incrementarValor(num:number){
    if(this.progreso >= 100 ){
      this.progreso = 100;
      return;
    }
    this.progreso = this.progreso+num;
    this.sumoValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
  restaValor(num:number){
    if(this.progreso<=0){
      debugger
      this.progreso = 0;
      return;
    }
    if(this.progreso===1){
      this.restarValor.emit(0)
      return;
    }
    this.progreso = this.progreso -num;
    this.restarValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  } 


}
