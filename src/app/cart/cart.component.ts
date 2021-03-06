import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { Remove, Add } from '../store/actions';
import InitialState, { selectCart } from '../store/reducer';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private store: Store<{cart: InitialState}>,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    ) {
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addEventListener('change', this._mobileQueryListener);
   }
  
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  cart: Array<Product>;
  lastOrder: any;
  total: number;
  show: boolean = false;
  spinner: boolean = false;


  ngOnInit(): void {
    this.getCart();
  } 

  addToCart(item: any, qty: number) {
    item = {...item, qty: item.qty + qty}
    if(item.qty === 0) {
      this.store.dispatch(Remove({payload: item}));
    }else{
      this.store.dispatch(Add({payload: item}));
    }
    this.getCart();
  }

  removeFromCart(item: Product){
    this.store.dispatch(Remove({payload: item}));
    this.getCart();
  }

  getTotalCost() {
    return this.cart.map(t => t.price * t.qty).reduce((acc, value) => acc + value, 0);
  }

  getCart(){
    this.store
    .select(selectCart)
    .subscribe((items: Array<Product>) => {
      this.cart = items;
    });
    this.total = this.getTotalCost();
  }

}