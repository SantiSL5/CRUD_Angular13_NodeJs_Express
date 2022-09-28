import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';


@NgModule({
  declarations: [
    CrudComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule,
  ], exports: [
    CreateCategoryComponent
  ]
})
export class CrudModule { }
