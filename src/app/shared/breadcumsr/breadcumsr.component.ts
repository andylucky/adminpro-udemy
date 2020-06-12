import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcumsr',
  templateUrl: './breadcumsr.component.html',
  styles: []
})

@Injectable({
  providedIn: 'root'
})

export class BreadcumsrComponent implements OnInit {

  titulo: string;

  constructor(private router: Router, private titulotitle: Title, private meta: Meta) {

    this.getDataRoute()
    .subscribe( evento =>{
      this.titulo =evento;
      this.titulotitle.setTitle(evento);
      const metatag: MetaDefinition ={
        name : 'description',
        content: this.titulo
      };
      this.meta.updateTag( metatag)

    })
   }

  ngOnInit() {
    this.getDataRoute()
  }

  getDataRoute(){
   return  this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( evento => {
        return evento.snapshot.data.titulo;
      })
    )
  }

}
