import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addPost(post:any):Observable<any>{
    return this.http.post<any>('https://parohod-155f4-default-rtdb.firebaseio.com/parohod.json', post)
      .pipe(map(res => {
          return {
            ...post,
            id: res.name,
          }
        })
      );
  }

  getAll():Observable<any> {
    return this.http.get<any>('https://parohod-155f4-default-rtdb.firebaseio.com/parohod.json')
      .pipe( map ( res => {
        return Object.keys(res)
          .map( key => ({
            ...res[key],
            id: key,
          }));
      }));
  }

  deletePost(id: any){
    return this.http.delete<any>(`https://parohod-155f4-default-rtdb.firebaseio.com/parohod/${id}.json`);
  }
}
