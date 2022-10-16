import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabloComponent} from "../tablo/tablo.component";
import {TabloService} from "../../services/tablo.service";

@Component({
  selector: 'app-kassa',
  templateUrl: './kassa.component.html',
  styleUrls: ['./kassa.component.scss']
})
export class KassaComponent implements OnInit {

  public step: number;
  public price!: number;
  public formData!: FormGroup;
  public fio: string;
  public city!: string;
  public parahod!: string;
  public discount!: any;
  public date!: string;
  public back!: boolean;


  constructor(private fb: FormBuilder, private tabloserv:TabloService) {
    this.step = 0;
    this.fio = '';
    this.city = '';
    this.parahod = '';


  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      person: this.fb.group({
        fio: ['', Validators.required],
        age: ['', Validators.required],
      }),
      citys: this.fb.group({
        city: ['', Validators.required],
        back: ['', Validators.required],
      }),
      parohod: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  calculation() {
    const priceBck = 1000;
    const priceDiscount = this.discount;
    const parohod1Price = 1200;
    const parohod2Price = 1500;
    const parohod3Price = 1800;
    if(this.back && this.parahod === 'Пароход 1'){
      this.price = parohod1Price + priceBck - (((parohod1Price + priceBck) / 100 ) * priceDiscount);
    }else if(this.parahod === 'Пароход 1' && this.back == false){
      this.price = parohod1Price  - ( (parohod1Price / 100 ) * priceDiscount)
    }else if(this.back && this.parahod === 'Пароход 2'){
      this.price = parohod2Price + priceBck - (((parohod1Price + priceBck) / 100 ) * priceDiscount);
    }else if(this.parahod === 'Пароход 2' && this.back == false){
      this.price = parohod2Price  - ( (parohod1Price / 100 ) * priceDiscount)
    }else if(this.back && this.parahod === 'Пароход 3'){
      this.price = parohod3Price + priceBck - (((parohod1Price + priceBck) / 100 ) * priceDiscount);
    }else if(this.parahod === 'Пароход 3' && this.back == false){
      this.price = parohod3Price  - ( (parohod1Price / 100 ) * priceDiscount)
    }

  }
  submit() {
    this.tabloserv.postObj(this.formData.value);
  }

}
