import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  defaultUrl = "http://localhost:3000/clients/";
  constructor(private http: HttpClient) {     
  };

  post(param: any, url:string): Promise<any> {    
    return this.http
      .post(url, param)
      .toPromise()
      .then()
      .catch();
  }

  get( url:string): Promise<any> {    
    return this.http
      .get(url,{})
      .toPromise()
      .then()
      .catch();
  }

  getEndereco(cep){
    var url = 'https://viacep.com.br/ws/'+cep+'/json/';

      return this.http
      .get(url,{})
      .toPromise()
      .then(this.parseDate)
      .catch();
  }
  
  getClients(){   
      return this.http
      .get(this.defaultUrl,{})
      .toPromise()
      .then(this.parseDate)
      .catch();
  }

  getClient(id){
    return this.http
    .get(this.defaultUrl+id,{})
    .toPromise()
    .then(this.parseDate)
    .catch();
  }


  saveClients(client){
    return this.http
    .post(this.defaultUrl,client)
    .toPromise()
    .then(this.parseDate)
    .catch();
  }


  updateClients(id,client){
    return this.http
    .put(this.defaultUrl +id,client)
    .toPromise()
    .then(this.parseDate)
    .catch();
  }


  parseDate(data){
    var endereco = data;
    return endereco;
  }

}
