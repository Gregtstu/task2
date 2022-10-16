import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TabloService {
  public clientObjServ:any = {};
  constructor(private http:HttpClient) { }

  postObj(obj:any){
    return this.clientObjServ = obj;
  }

  getObj(){
    return this.clientObjServ;
  }
}
