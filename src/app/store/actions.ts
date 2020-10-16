import { Action, createAction, props } from '@ngrx/store';
import { Product } from '../product/product.component';

/*
export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
  ClearCart = '[Products] Clear success'
}
*/

export const Add = createAction('[Product] Add to cart', props<{ payload: Product }>());
export const Remove = createAction('[Product] Remove from cart', props<{ payload: Product }>());
export const LoadItems = createAction('[Product] Load items from server', props<{ payload: Product[] }>());
export const LoadSuccess = createAction('[Product] Load success');
export const ClearCart = createAction('[Product] Clear success');

/*
export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class ClearCart implements Action {
  readonly type = ActionTypes.ClearCart;
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | ClearCart;  
*/