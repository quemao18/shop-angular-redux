import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import  * as ActionTypes  from './actions';
import { ProductsService } from '../services/products.service';
import { Action } from '@ngrx/store';
import { Product } from '../product/product.component';

    
@Injectable()
export class ShopEffects {
    constructor(
    private actions$: Actions,
    private productsService: ProductsService
    ) {}

    @Effect()
    getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LoadSuccess),
      mergeMap(action =>
        this.productsService.getAll().pipe(
          map((data: Product[]) => { 
            return ActionTypes.LoadItems({ payload: data });
          }),
          catchError(() => 
            EMPTY
          )
        )
      )
    )
  );
    
  
}