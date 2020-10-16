import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Add, Remove } from '../store/actions';
// import { NgRedux } from '@angular-redux/store';
import InitialState, { selectCart }  from '../store/reducer';

export interface Product {
  product_id: number;
  category: any;
  name: string;
  price: number;
  description: string;
  image: string;
  qty?: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private store: Store<{ cart: InitialState }>
    ) {}

  inCart = false;
  cart: Array<Product> = [];

  @Input() product: Product;

  addToCart(item: Product) {
      this.store.dispatch(Add({payload: item}));
      this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.store.dispatch(Remove({payload: item}));
    this.inCart = false;
  }

  
  getCart(){
    this.store
    .select(selectCart)
    .subscribe((items:Array<Product>) => {
      this.cart = items;
    });
  }

  findInCart(){
    if(this.cart && this.cart.filter((_) => _.product_id === this.product.product_id).length > 0)
    this.inCart = true;
    else
    this.inCart = false;
  }

  ngOnInit() {   
    this.getCart();
    this.findInCart();
  }
}
