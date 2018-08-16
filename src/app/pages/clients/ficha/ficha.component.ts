import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { AppService } from './../../../services/app.service'
import { Client } from './../../clients/client';


@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  client = new Client();
  constructor(private router:Router,private route: ActivatedRoute,private appService:AppService) { }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    
    this.appService.getClient(id).then((client) =>{
      this.client = client;    
    })    
  }

  setPage(page){
    this.router.navigate(['/' + page]);
  }
}
