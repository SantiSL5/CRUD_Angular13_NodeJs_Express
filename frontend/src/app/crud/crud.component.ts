import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  view: String = "list";
  crud: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
