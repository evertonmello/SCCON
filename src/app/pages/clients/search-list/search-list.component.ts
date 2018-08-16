import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { Router } from '@angular/router';

export interface Client {
  nome: string;
  email: string;
  cep: Number;
  telefone: Number;
  status: boolean
}

@Component({
  selector: 'search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email', 'cep', 'telefone', 'status'];
  dataSource: MatTableDataSource<Client>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router:Router) {
    const users = [
      {nome:"a", email:"a@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"b", email:"b@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"c", email:"c@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"d", email:"d@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"e", email:"e@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
      {nome:"asddsa", email:"asddsa@dsasd.com",cep: 13313530, telefone:12339876, status: true},
    ]
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editClient(client){
    console.log(client)
    this.router.navigate(['/ficha' ]);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
