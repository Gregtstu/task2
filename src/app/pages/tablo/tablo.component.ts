import {Component, Input, OnInit} from '@angular/core';
import {TabloService} from "../../services/tablo.service";

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
  @Input() price!: any;
  public ticket: string;


  constructor(private tabloServ: TabloService) {
    this.back ? this.ticket = 'нет' : this.ticket = 'есть';
  }

  ngOnInit(): void {

  }


}
