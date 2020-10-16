import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() {}

  @Input() products: Array<Product>;
  order: string = 'name';
  reverse: boolean = false;
  p: number = 1;
  spinner: boolean = true;

  ngOnInit() {
    this.products!=null ? this.spinner = false : this.spinner = true;
  }

  orderBy(order: string, reverse: boolean){
    this.order = order;
    this.reverse = reverse;
  }
}
