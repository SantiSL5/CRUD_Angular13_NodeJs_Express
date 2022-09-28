import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})

export class CreateCategoryComponent implements OnInit {

  createCategory: Category[] = [];

  constructor(private _categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  saveCategory(category: Category): void {

    this._categoryService.save(category).subscribe({
      next: (res) => {
        console.log('Category added');
      },
      error: (e) => console.error(e)
    });
  }


}
