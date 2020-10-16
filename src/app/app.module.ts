import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { Product, ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { OrderByPipe, PipesPipe } from './pipes.pipe';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './store/effects';
import { ActionReducerMap, StoreModule} from '@ngrx/store';
import InitialState, { reducer } from './store/reducer';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { CustomerComponent } from './customer/customer.component';



const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'customer', component: CustomerComponent },
];
// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['cart', 'items']})(reducer);
}

const reducers: ActionReducerMap<InitialState> = {cart:Array, items:Array};

export const metaReducers: MetaReducer<any>[] = [debug, localStorageSyncReducer];


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule, 
    // NgReduxModule, 
    NgxPaginationModule,
    StoreModule.forRoot({reducer}, {
      metaReducers,
    }),
    StoreModule.forFeature('items', reducer, ),
    StoreModule.forFeature('cart', reducer,),
    EffectsModule.forRoot([ShopEffects])
  ],
  entryComponents: [
    AppComponent,
    HomeComponent,
    NavComponent,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    PipesPipe,
    OrderByPipe,
    CustomerComponent,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard'} },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/