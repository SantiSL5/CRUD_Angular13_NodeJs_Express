import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {

  errors: [] = [];
  isSubmitting = false;
  createFormProduct: FormGroup;

  constructor(
    private _productService: ProductService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.createFormProduct = this.fb.group({
      'name': [''],
      'price': []
    });
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this._productService.save(this.createFormProduct.value).subscribe({
      next: (res) => {
        console.log('Product added');
      },
      error: (e) => console.error(e)
    });
  }

}
