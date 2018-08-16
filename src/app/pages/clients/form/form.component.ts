import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router,ActivatedRoute } from '@angular/router';

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
  newClient = true;
  constructor( private formbuilder:FormBuilder, private appService:AppService,private route: ActivatedRoute ) { }

  ngOnInit() {
    
    var id = this.route.snapshot.params.id;    
    this.buildform();    

    if(id){
      this.setUpForm(id);  
      this.newClient = false;
    }
  }

  buildform(){
    this.formData = this.formbuilder.group({
      nome:['', Validators.required],
      email:['', Validators.compose([Validators.required,Validators.email])],
      telefone:['', Validators.compose([Validators.required,Validators.pattern('^[0-9]{8,9}$')])],
      cep:['',Validators.compose([Validators.required, Validators.pattern('^[0-9]{8,8}$')])]
    });   
  }

  setUpForm(id){
    this.appService.getClient(id).then((client) =>{      
      this.client = client;
      this.formData.setValue({
        nome:client.nome,
        email:client.email,
        telefone:client.telefone,
        cep:client.cep
      });
    }) 
  }

  onSubmit(form){
    if(form.valid){
      this.appService.getEndereco(form.value.cep).then((res) =>{
        this.endereco = res.logradouro + ", " + res.bairro + ", " + res.uf;
      });

      var newClient = new Client();
      newClient = form.value
      newClient.id = Math.random().toString(36).substr(2, 9)       
      this.client = newClient;

      this.appService.saveClients(this.client).then(res =>console.log(res))
    }
  }

  updateClient(){
    if(this.formData.valid){
      var clientId = this.client.id;
    
      this.appService.updateClients(clientId, this.formData.value).then((res) =>{
        this.endereco = res.logradouro + ", " + res.bairro + ", " + res.uf;
      });
    }
  }

  matcher = new MyErrorStateMatcher();
}
