import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  view: String = "list";
  crud: String = "";
  slugCatUpdate: string = "";
  slugProdUpdate: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  updateCategory(slug: string) {
    this.view= "update"
    this.slugCatUpdate=slug;
  }

  updateProduct(slug: string) {
    this.view= "update"
    this.slugProdUpdate=slug;
  }

  listEvent() {
    this.view= "list"
  }
}
