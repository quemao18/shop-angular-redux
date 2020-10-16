import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getByEmail(email: string) {
    return this.http
      .get(environment.apiUrl+'/customers/email/' + email)
  }

  
  createCustomer(values: any) {
    return this.http
      .post(environment.apiUrl+'/customers/create/', values)
  }

  createOrder(customer_id: number, cart: any) {
    var id = this.randomStringCharset(6, "ASERTCHBasertchb0123456789");
    const data = {
      id: id,
      customer_id: customer_id,
      cart: cart
    }
    return this.http
      .post(environment.apiUrl+'/orders/create/', data)
  }

  getCustomerOrders(customer_id: number) {
    return this.http
      .get(environment.apiUrl+'/orders/customer_id/' + customer_id)
  }


  randomStringCharset(len: number, charSet?: string) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
  }

}
