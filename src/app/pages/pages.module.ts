import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { Pages_Routes } from './pages.routes';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
// ng2-charts
import { ChartsModule } from 'ng2-charts';


@NgModule({
declarations:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent

],
exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    SharedModule,
    PagesComponent
    
    

    
],
imports:[
    SharedModule,
    Pages_Routes,
    FormsModule,
    ChartsModule
]


})

export class PagesModule{}