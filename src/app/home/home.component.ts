import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { Observable, Subscription } from "rxjs";
import { select, Store } from '@ngrx/store';
import { Add, LoadSuccess } from '../store/actions';
import { map } from 'rxjs/operators';
import InitialState, { selectCart, selectItems } from '../store/reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private store: Store<{ items: Array<Product>, cart: Array<Product> }>) {
      this.items$ = store.pipe(select(selectItems));
  }

  ngOnInit() {
    this.spinner = true;
    this.store.dispatch(LoadSuccess());
  }

  items$: Observable<Array<Product>>;
  spinner: boolean = false;

}