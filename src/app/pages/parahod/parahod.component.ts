import { Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-parahod',
  templateUrl: './parahod.component.html',
  styleUrls: ['./parahod.component.scss']
})
export class ParahodComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'barcode', 'parohod', 'delete'];
  public dataSource1!: MatTableDataSource<any>;
  public clients!:any[];
  public indexArr:any[] = [];
  public counter!:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (private api: ApiService) {
  }

  ngOnInit(): void {
    this.getlAllClients();
  }

  getlAllClients() {
    this.api.getAll()
      .subscribe({
        next: (res) => {
          this.dataSource1 = new MatTableDataSource(res);
          this.dataSource1.paginator = this.paginator;
          this.dataSource1.sort = this.sort;
          console.log(res)
        },
        error: (err) => {
          alert('Пассажиров нет!!!');
        }
      })
  }

  delete(id:any) {
    this.api.deletePost(id).subscribe(res => {
      alert('Удален из списка пассажиров');
      this.getlAllClients();
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

}
