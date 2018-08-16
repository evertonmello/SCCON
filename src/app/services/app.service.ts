import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  
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

  parseDate(data){
    var endereco = data;
    return endereco;
  }

}