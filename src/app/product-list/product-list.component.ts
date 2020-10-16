import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() {}

  @Input() products: Array<Product>;
  @Input() spinner: boolean;


  order: string = 'name';
  reverse: boolean = false;
  p: number = 1;

  ngOnInit() {
    if(this.products)
    this.spinner = false;
  }



  orderBy(order: string, reverse: boolean){
    this.order = order;
    this.reverse = reverse;
  }
}
