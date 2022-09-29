import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})

export class ListCategoriesComponent implements OnInit {

  listCategories: Category[] = [];
  viewDetails: String = "hidden";
  detailedCategory!: Category;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  refreshList(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this._categoryService.query().subscribe(data => {
      this.listCategories = data;
    });
  }

  deleteCategory(slug: string): void {
    this._categoryService.destroy(slug).subscribe({
      next: (res) => {
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  showDetails(slug: string): void {
    this.viewDetails = "show";
    this._categoryService.get(slug).subscribe(data => {
      console.log(data);
      this.detailedCategory = data;
    });
  }

}



