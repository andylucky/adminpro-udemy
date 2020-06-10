import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { BreadcumsrComponent } from './breadcumsr/breadcumsr.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
declarations:[
    BreadcumsrComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
],
exports: [
    BreadcumsrComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
]

})

export class SharedModule{}