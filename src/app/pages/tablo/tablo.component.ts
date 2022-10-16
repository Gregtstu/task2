import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tablo',
  templateUrl: './tablo.component.html',
  styleUrls: ['./tablo.component.scss']
})
export class TabloComponent implements OnInit {
  public clientObj!: any;
  @Input() fio!: string;
  @Input() city!: string;
  @Input() parahod!: string;
  @Input() discount!: string;
  @Input() date!: string;
  @Input() back!: boolean;
  @Input() flagBarcode!: boolean;
  @Input() price!: any;
  @Input() barcode!: any;


  constructor() {
  }

  ngOnInit(): void {

  }


}
