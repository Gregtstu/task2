import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageBarcodeService} from "../../services/local-storage-barcode.service";
import {ApiService} from "../../services/api.service";


@Component({
  selector: 'app-kassa',
  templateUrl: './kassa.component.html',
  styleUrls: ['./kassa.component.scss']
})
export class KassaComponent implements OnInit {

  public step: number;
  public price!: number | string;
  public barcode!: any;
  public flagBarcode: boolean;
  public formData!: FormGroup;
  public fio: string;
  public city!: string;
  public parahod!: string;
  public discount!: any;
  public date!: string;
  public back!: boolean;


  constructor(
    private fb: FormBuilder,
    private localStoregServ: LocalStorageBarcodeService,
    private api:ApiService
  ) {
    this.step = 0;
    this.fio = '';
    this.city = '';
    this.parahod = '';
    this.flagBarcode = false;
  }

  ngOnInit(): void {
    this.formData = this.fb.group({
      person: this.fb.group({
        fio: ['', Validators.required],
        age: ['', Validators.required],
      }),
      citys: this.fb.group({
        city: ['', Validators.required],
        back: ['',],
      }),
      parohod: ['', Validators.required],
      time: ['', Validators.required],
    });
    this.getBarcode();
  }

  getBarcode() {
    if (this.localStoregServ.getBarcode()) {
      this.barcode = this.localStoregServ.getBarcode();
    } else {
      this.barcode = 506476;
    }
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
    if (this.back && this.parahod === 'Пароход 1') {
      this.price = parohod1Price + priceBck - (((parohod1Price + priceBck) / 100) * priceDiscount);
    } else if (this.parahod === 'Пароход 1' && this.back == false) {
      this.price = parohod1Price - ((parohod1Price / 100) * priceDiscount)
    } else if (this.back && this.parahod === 'Пароход 2') {
      this.price = parohod2Price + priceBck - (((parohod1Price + priceBck) / 100) * priceDiscount);
    } else if (this.parahod === 'Пароход 2' && this.back == false) {
      this.price = parohod2Price - ((parohod1Price / 100) * priceDiscount)
    } else if (this.back && this.parahod === 'Пароход 3') {
      this.price = parohod3Price + priceBck - (((parohod1Price + priceBck) / 100) * priceDiscount);
    } else if (this.parahod === 'Пароход 3' && this.back == false) {
      this.price = parohod3Price - ((parohod1Price / 100) * priceDiscount)
    }

  }

  getNewBarcode() {
    if (this.formData.valid) {
      this.step++;
      this.localStoregServ.addLs(this.barcode);
      this.flagBarcode = true;
    }else {
      alert("Заполнены не все данные клиента!");
    }
    this.getBarcode();
  }


  toPrint() {
    if(this.formData.valid){
      window.print();
    }else {
      alert("Печать билета не возможна! Заполнены не все данные клиента!");
    }
  }

  submit() {
    if (this.formData.invalid){
      return
    }

    const obj:any = {
      fio: this.formData.value.person.fio,
      back: this.formData.value.citys.back,
      parohod:this.formData.value.parohod,
      barcode: this.barcode,
    }

    this.api.addPost(obj)
      .subscribe({
        next:(res)=> {
          this.formData.reset()
          this.flagBarcode = false;
          this.price = '';
          alert("Новый пассажир успешно добавлен в базу!");

        },
        error:(err)=> {
          alert("Возникла ошибка!!");
        }
      })

  }
}
