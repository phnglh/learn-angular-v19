import { Component, Input, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Product } from '../../../../types/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
 @Input() products: Product[] = [];

 ngOnInit(): void {
 }
}
