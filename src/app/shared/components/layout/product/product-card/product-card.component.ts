import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../types/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
@Input() product!: Product

}
