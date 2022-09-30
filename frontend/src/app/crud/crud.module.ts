import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';
import { CrudRoutingModule } from './crud-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    CrudComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    UpdateCategoryComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule,
    ReactiveFormsModule
  ], exports: [
    CreateCategoryComponent,
    CreateProductComponent,
    UpdateCategoryComponent,
    UpdateProductComponent
  ]
})
export class CrudModule { }
