import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    ListCategoriesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    ListCategoriesComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
