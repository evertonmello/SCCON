import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AppService } from './../../../services/app.service'
import { Client } from './../../clients/client';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  endereco;
  formData;
  emailFormControl;
  client;
  constructor( private formbuilder:FormBuilder, private appService:AppService ) { }

  ngOnInit() {
    this.formData = this.formbuilder.group({
      nome:['asdsaadsad', Validators.required],
      email:['asdasd@asd.com', Validators.compose([Validators.required,Validators.email])],
      telefone:['12345678', Validators.compose([Validators.required,Validators.pattern('^[0-9]{8,9}$')])],
      cep:['13313530',Validators.compose([Validators.required, Validators.pattern('^[0-9]{8,8}$')])]
    });
  }

  onSubmit(form){
    if(form.valid){
        var endereco = this.appService.getEndereco(form.value.cep).then((res) =>{
          this.endereco = res.logradouro + ", " + res.bairro + ", " + res.uf;
        });

      var newClient = new Client();
      newClient = form.value
      newClient.id = Math.random().toString(36).substr(2, 9)       
      this.client = newClient;

      this.appService.saveClients(this.client).then(res =>console.log(res))

    }
  }

  matcher = new MyErrorStateMatcher();
}
