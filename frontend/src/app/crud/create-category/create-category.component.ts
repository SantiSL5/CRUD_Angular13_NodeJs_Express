import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})

export class CreateCategoryComponent implements OnInit {

  errors: [] = [];
  isSubmitting = false;
  createFormCategory: FormGroup;

  constructor(
    private _categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.createFormCategory = this.fb.group({
      'name': [''],
      'photo': ['']
    });
  }

  ngOnInit(): void {
  }

  createCategory(): void {
    this._categoryService.save(this.createFormCategory.value).subscribe({
      next: (res) => {
        console.log('Category added');
      },
      error: (e) => console.error(e)
    });
  }

}
