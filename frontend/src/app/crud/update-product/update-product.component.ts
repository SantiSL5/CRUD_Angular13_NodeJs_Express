import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  @Input() slug  = '';

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
    this._productService.get(this.slug).subscribe(data => {
      this.updateFormProduct = this.fb.group({
        'name': [data.name],
        'price': [data.price]
      });
      console.log(data);
    });
  }

  updateProduct(): void {
    this._productService.put(this.slug,this.updateFormProduct.value).subscribe({
      next: (res) => {
        console.log('Product updated');
      },
      error: (e) => console.error(e)
    });
  }
}
