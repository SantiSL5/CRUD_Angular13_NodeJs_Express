import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateFormProduct: FormGroup;
  @Input() slug  = '';
  @Output() list = new EventEmitter();

  constructor(
    private _productService: ProductService,
    private fb: FormBuilder,
    private toastrService: ToastrService
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
        this.toastrService.success('Product updated', 'Product updated');
        this.list.emit();
      },
      error: (e) => console.error(e)
    });
  }
}
