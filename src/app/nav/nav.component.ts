import {ChangeDetectorRef, Component, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import * as Hammer from 'hammerjs';
// import { NgRedux } from '@angular-redux/store';
import { Product } from '../product/product.component';
import { Store } from '@ngrx/store';
import InitialState, { selectCart } from '../store/reducer';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  @ViewChild(MatSidenav)
  public snav: MatSidenav;
  public dark: boolean ;
  name: string = "mPos SHOP"
  
  private _mobileQueryListener: () => void;
  cart: Array<Product>;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    elementRef: ElementRef, 
    private store: Store<{ cart: InitialState }> 
    // private ngRedux: NgRedux<InitialState>
    ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
    const hammertime = new Hammer(elementRef.nativeElement, {});
        hammertime.on('panright', (ev) => {
            this.snav.open();
        });
        hammertime.on('panleft', (ev) => {
            this.snav.close();
        });

    this.store
    .select(selectCart)
      .subscribe((items: Array<Product>) => {
        this.cart = items;
      });
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }


}
