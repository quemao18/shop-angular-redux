import { LoadItems, Add, ClearCart, Remove, LoadSuccess } from './actions';
import { Product } from '../product/product.component';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';

export default class InitialState {
  items: Array<Product>;
  cart: Array<Product>;
}

const initializeState = (): InitialState => {
  const cart = getSavedCart();
  return { items: Array<Product>(), cart: cart ? cart : Array<Product>(), };
};

const saveCart = (state:any): void => {
  window.localStorage.setItem('cart', JSON.stringify(state.cart));
}

export const getSavedCart = (): Array<Product> => {
  return JSON.parse(window.localStorage.getItem('cart'));
}

const initialState = initializeState(); 

export const selectItem = createFeatureSelector<InitialState>('items');
export const selectItems = createSelector(selectItem, state => state.items);
export const selectCrt = createFeatureSelector<InitialState>('cart');
export const selectCart = createSelector(selectCrt, (state) => state.cart);

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
    const state2 = { ...state, cart }
    saveCart(state2);
    return state2;
  }
  const state2 = { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
  saveCart(state2);
  return state2
}),
  on(Remove, (state, {payload}) => {
    const state2 = {
      ...state,
      cart: [...state.cart.filter(item => item.product_id !== payload.product_id)]
    };
    saveCart(state2);
    return state2
  }),
  on(ClearCart, (state) => {
    const state2 =  { ...state , cart: [] };
    saveCart(state2);
    return state2;
  })
    
)

export function reducer(state: InitialState, action: Action) {
    return ShopReducer( state, action );
}
