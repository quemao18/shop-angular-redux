import { LoadItems, Add, ClearCart, Remove, LoadSuccess } from './actions';
import { Product } from '../product/product.component';
import { Action, createFeatureSelector, createReducer, createSelector, on, State } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { state } from '@angular/animations';

export default class InitialState {
  items: Array<Product>;
  cart: Array<Product>;
}

const initializeState = (): InitialState => {
  return { items: Array<Product>(), cart: Array<Product>(), };
};

const initialState = initializeState(); 

export const selectItem = createFeatureSelector<InitialState>('items');
export const selectItems = createSelector(selectItem, state => state.items);
export const selectCrt = createFeatureSelector<InitialState>('cart');

export const selectCart = createSelector(selectCrt, state => state.cart);

const ShopReducer = createReducer(
  initialState,
  on(LoadSuccess, state => state),
  on(LoadItems, (state, { payload }) => {
    return { ...state, items: payload };
  }),
  on(Add, (state, {payload}) => { 
  const productId = payload.product_id
  if (state.cart.findIndex(({product_id}) => product_id === productId) !== -1) {
    const cart = state.cart.reduce((cartAcc, product) => {
      if (product.product_id === productId) {
        cartAcc.push({ ...product, qty: payload.qty }) // Increment qty
      } else {
        cartAcc.push(product)
      }
      return cartAcc
    }, [])

    return { ...state, cart }
  }
  return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] }
}),
  on(Remove, (state, {payload}) => {
    return {
      ...state,
      cart: [...state.cart.filter(item => item.product_id !== payload.product_id)]
    };
  }),
  on(ClearCart, (state) => ({ ...state , cart: [] }))
)

export function reducer(state: InitialState, action: Action) {
 return ShopReducer( state, action );
}
