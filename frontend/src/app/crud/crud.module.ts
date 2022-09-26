import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { ListCategoriesComponent } from '../shared/list-categories/list-categories.component';


@NgModule({
  declarations: [
    CrudComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule,
  ]
})
export class CrudModule { }
