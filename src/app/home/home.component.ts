import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
// import { NgRedux, select } from '@angular-redux/store';
// import { InitialState } from '../store/reducer';
import { ProductsService } from '../services/products.service';
import { Observable, Subscription } from "rxjs";
import { select, Store } from '@ngrx/store';
import { LoadItems, LoadSuccess } from '../store/actions';
import { map } from 'rxjs/operators';
import InitialState, { selectItems } from '../store/reducer';
// import { GetItems } from '../store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // constructor(
  //   private store: Store<InitialState>, 
  //   private productService: ProductsService
  // ) {}

  constructor(
    private store: Store<{ items: Array<Product> }>) {
      this.items$ = store.pipe(select(selectItems));
  }

  ngOnInit() {
    this.store.dispatch(LoadSuccess());
  }

  items$: Observable<Array<Product>>;

}