import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { Pages_Routes } from './pages.routes';
import { PagesComponent } from './pages.component';


@NgModule({
declarations:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
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
    Pages_Routes
]


})

export class PagesModule{}