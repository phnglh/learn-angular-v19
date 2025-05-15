import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { ProductPage } from './pages/product/product.component';
import { ProductDetailPage } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  {path: '', component: HomePage, title: "Home Page"},
  {path: 'products', component: ProductPage, title: "Product Page"},
   { path: 'products/:id', component: ProductDetailPage },
];
