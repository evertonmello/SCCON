import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { AppService } from './../../../services/app.service'
import { Client } from './../../clients/client';
import { CepComponent } from './../cep/cep.component'

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  cepComp :CepComponent;
  endereco;
  client = new Client();
  constructor(private router:Router,private route: ActivatedRoute,private appService:AppService) {
    this.cepComp = new CepComponent(this.appService)
  }

  ngOnInit() {
    var id = this.route.snapshot.params.id;    
    this.appService.getClient(id).then((client) =>{
      this.client = client;    
      
      this.cepComp.getEndereco(this.client.cep, (endereco) =>{
        this.endereco = endereco;
      })
    })    
  }

  setPage(){
    this.router.navigate(['/cadastro/' + this.client.id]);
  }


}
