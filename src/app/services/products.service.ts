// import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { Product } from '../product/product.component';
import { LoadItems } from '../store/actions';
import InitialState from '../store/reducer';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(
    private http: HttpClient,
    // private ngRedux: NgRedux<InitialState>,
    private store: Store<InitialState>, 

  ) {}

  getAll() {
    return this.http
      .get(environment.apiUrl+'/products')
      // .subscribe((products: Array<Product>) => {
      //   this.store.dispatch(LoadItems(products));
      // });
  }

}
