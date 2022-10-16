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


  addLs(barcode: number,) {
    barcode++;
    localStorage.setItem('counterBarcode', JSON.stringify(barcode));
  }

}
