import { NgModule } from "@angular/core";
import { BreadcumsrComponent } from './breadcumsr/breadcumsr.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
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