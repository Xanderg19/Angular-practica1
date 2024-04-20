import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharterComponent } from './components/add-charter/add-charter.component';
import { FormsModule } from '@angular/forms';



@NgModule({

  exports: [

  MainPageComponent

  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharterComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
