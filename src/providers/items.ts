import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Item } from '../models/item';

@Injectable()
export class Items {
  items;
  constructor(
    public http: Http, 
    public api: Api
  ) {
    
  }

  query(params?: any) {
    return this.api.getList('/items', params)
      .map(resp => resp.json());
  }

  add(item: Item) {
  }

  addContact(id, name, address, phone, city) {
    if(id) {
      this.contactList.update(id, {
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then( newContact => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    } else {
      this.contactList.push({
        name: name,
        address: address,
        phone: phone,
        city: city
      }).then( newContact => {
        this.navCtrl.pop();
      }, error => {
        console.log(error);
      });
    }
  }


  delete(item: Item) {
  }

}
