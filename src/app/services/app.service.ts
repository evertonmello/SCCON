import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
@Injectable()
export class AppService {

  
  constructor(private http: Http) {     
  };

  post(param: any): Promise<any> {    
    return this.http
      .post('http://localhost:8000/users', param)
      .toPromise()
      .then()
      .catch();
  }

}
