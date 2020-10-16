import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { CartComponent } from '../cart/cart.component';
import { Product } from '../product/product.component';
import { CustomerService } from '../services/customer.service';
import { ClearCart } from '../store/actions';
import InitialState, { selectCart } from '../store/reducer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(
    private customerService: CustomerService, 
    private snackBar: MatSnackBar,
    private store: Store<{cart: InitialState}>,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    elementRef: ElementRef 
    ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  showCustomer: boolean = false;
  showCheckout: boolean = false;
  cart: Array<Product>;
  lastOrder: any;
  total: number;
  show: boolean = false;
  new: boolean = true;
  formGroup: FormGroup;
  email: FormControl;
  name: FormControl;
  address: FormControl;
  id: FormControl;
  customer: any = {
    name: "",
    id: "",
    address: "",
    email: "",
  };
  orderId: string;
  customerOrders: any;
  spinner: boolean = false;


  ngOnInit(): void {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.address = new FormControl('');
    this.id = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);

    this.formGroup = new FormGroup({
      email: this.email,
      name: this.name,
      id: this.id,
      address: this.address
    });
    this.getCart();
  }

  checkout(newCustomer?:boolean){
    this.spinner = true;
    this.customerService.getByEmail(this.formGroup.value.email)
    .subscribe(
      (data: any) => {
        this.customer = data[0];
        if(data.length == 0){
         //create
         this.customerService.createCustomer(this.formGroup.value)
         .subscribe(
           (data: any) => {
            this.showCheckout = true;
            this.snackBar.open('Customer register...', '', { duration: 5000 })
            .onAction().subscribe(() => {
              console.log('The snack-bar action was triggered!');
              });
              this.customer = data;
              this.showCustomer = true;
              this.new = false;
              if(!newCustomer)
              this.customerService.createOrder(this.customer.customer_id, this.cart).subscribe(
                ((data: any)=>{
                  this.orderId = data.id;
                  this.getCustomerOrders(this.customer);
                  this.clearCart();
                })
              );
           }
         )
        }else{
          this.showCustomer = true;
          if(this.cart.length>0)
          this.showCheckout = true;
          this.new = false;
          if(!newCustomer)
          this.customerService.createOrder(this.customer.customer_id, this.cart).subscribe(
            ((data: any)=>{
              console.log(data)
              this.orderId = data.id;
              this.getCustomerOrders(this.customer);
              this.clearCart();
            })
          );
        }
        this.spinner = false;
      }
    );
    
  }

  getCustomerOrders(customer: any){
    this.customerService.getCustomerOrders(customer.customer_id).subscribe(
      (data: any) => {
        this.customerOrders = data;
        this.lastOrder = this.customerOrders.filter((order: any)=> order.id === this.orderId);
      }
    )
  }

  
  search(){
    this.spinner = true;
    this.showCheckout = false;
    this.customerService.getByEmail(this.formGroup.value.email)
    .subscribe(
      (data: any) => {
        this.customer = data[0];
        this.showCustomer = true;
        if(data.length == 0){
          this.snackBar.open('Email Not found', '', { duration: 5000 })
          .onAction().subscribe(() => {
          console.log('The snack-bar action was triggered!');
          });
          this.showCustomer = false;
        }
        if(this.cart.length>0)
        this.showCheckout = true;
        this.getCustomerOrders(this.customer);
        this.spinner = false;
      }
    );
  }

  clearCart(){
    this.store.dispatch(ClearCart());
  }
  
  getCart(){
    this.store
    .select(selectCart)
    .subscribe((items: Array<Product>) => {
      this.cart = items;
    });
    // this.total = this.getTotalCost();
  }
}
