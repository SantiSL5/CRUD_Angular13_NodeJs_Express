import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateFormProduct: FormGroup;

  constructor(
    private _productService: ProductService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.updateFormProduct = this.fb.group({
      'name': [''],
      'price': []
    });
  }

  ngOnInit(): void {
  }

  updateProduct(): void {
    this._productService.save(this.updateFormProduct.value).subscribe({
      next: (res) => {
        console.log('Category added');
      },
      error: (e) => console.error(e)
    });
  }
}
