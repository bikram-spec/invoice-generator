import { Injectable } from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private token:LocalStorageService) { }
  
  isLogedIn():boolean{
    let payload=this.token.getToken("authorization");
    if (!payload){
      return false
    }
    else
    {
      let data=payload.split('.')[1];
      let user=JSON.parse(window.atob(data));
      if(user.exp > Date.now()/1000){
        return true;
      }
      else
      {
        return false;
      }
    }  
  }
}
