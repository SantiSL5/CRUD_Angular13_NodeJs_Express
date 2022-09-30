import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    CrudComponent,
    CreateCategoryComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ], exports: [
    CreateCategoryComponent,
    CreateProductComponent
  ]
})
export class CrudModule { }
