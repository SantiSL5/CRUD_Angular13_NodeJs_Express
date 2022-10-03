import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { CategoryService } from 'src/app/core/services/category.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  updateFormCategory: FormGroup;
  @Input() slug  = '';
  @Output() list = new EventEmitter();

  constructor(
    private _categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.updateFormCategory = this.fb.group({
      'name': [],
      'photo': []
    });
  }

  ngOnInit(): void {
    this._categoryService.get(this.slug).subscribe(data => {
      this.updateFormCategory = this.fb.group({
        'name': [data.name],
        'photo': [data.photo]
      });
      console.log(data);
    });
  }

  updateCategory(): void {
    this._categoryService.put(this.slug,this.updateFormCategory.value).subscribe({
      next: (res) => {
        console.log('Category updated');
        this.list.emit();
      },
      error: (e) => console.error(e)
    });
  }
}
