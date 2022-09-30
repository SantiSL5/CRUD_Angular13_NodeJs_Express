import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  view: String = "list";
  crud: String = "";
  slugUpdate: String = "";

  constructor() { }

  ngOnInit(): void {
  }

  updateCategory(slug: string) {
    this.view= "update"

  }
}
