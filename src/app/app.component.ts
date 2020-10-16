import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from './product/product.component';
import { Add } from './store/actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  constructor(private router: Router, private store: Store<{ items: Array<Product>, cart: Array<Product> }>){}

  ngOnInit(){

    //scroll to top
    this.router.events
    .subscribe(() => {
      document.querySelector('.mat-sidenav-content').scrollTop = 0;
    });

    const data = window.localStorage.getItem('cart');
    const dataParse = JSON.parse(data);
    dataParse.forEach((item: Product) => {
        this.store.dispatch(Add({payload: item}));
    });

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/