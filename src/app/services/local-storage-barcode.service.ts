import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageBarcodeService {
  constructor(private http: HttpClient) {
  }

  getBarcode() {
    return localStorage.getItem('counterBarcode');
  }


  addLs(barcode: any,) {
    let barcodeLs = localStorage.getItem('counterBarcode');
    if(barcode == barcodeLs){
      barcode = +barcode + 1 ;
      console.log('barcode')
    }else {
      console.log('nobarcode')
    }
    localStorage.setItem('counterBarcode', barcode);
  }

}
