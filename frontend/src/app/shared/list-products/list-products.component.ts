import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Product[] = [];
  viewDetails: String = "hidden";
  detailedProduct!: Product;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  refreshList(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this._productService.query().subscribe(data => {
      this.listProducts = data;
    });
  }

  deleteProduct(slug: string): void {
    this._productService.destroy(slug).subscribe({
      next: (res) => {
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  showDetails(slug: string): void {
    this.viewDetails = "show";
    this._productService.get(slug).subscribe(data => {
      console.log(data);
      this.detailedProduct = data;
    });
  }

}
