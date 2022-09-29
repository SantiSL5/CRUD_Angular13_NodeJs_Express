import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudComponent,
    CreateCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ], exports: [
    CreateCategoryComponent
  ]
})
export class CrudModule { }
