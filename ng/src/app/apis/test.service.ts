import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get('http://ferp.alwaysdata.net/voucher-status');
  }
}
