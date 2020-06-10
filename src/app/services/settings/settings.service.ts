import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    ajustes: Ajustes = {
      temaUrl: "assets/css/colors/default.css",
      tema: "default"

    }
  constructor( @Inject(DOCUMENT) private _document) { 
    this.cargarAjusters()
  }

    guardarAjustes(){
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }

    cargarAjusters(){
      debugger
      if(localStorage.getItem('ajustes')){
        debugger
        this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        this.aplicarTema(this.ajustes.tema);

      }
      else{

      }
    }

    aplicarTema(tema: string){
    debugger
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('temas').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();


    }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
