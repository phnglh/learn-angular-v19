import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from "../../shared/components/layout/product/product-list/product-list.component";
import { Product } from '../../shared/types/product';

@Component({
  selector: 'app-product',
  imports: [RouterModule, ProductListComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductService]
})
export class ProductPage implements OnInit{
products:  Product[] = []
constructor(private productService: ProductService){}
ngOnInit() {
    this.productService.getProduct().subscribe((res: any) => {
      this.products = res.products;
    });
  }
}
