import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'

import { AppService } from './../../../services/app.service'


@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {
 
  endereco;
  formData;
  formbuilder = new FormBuilder()
  @Output()updateCep = new EventEmitter();
  constructor(private appService:AppService) { }
 

  ngOnInit() {
    this.formData = this.formbuilder.group({cep:['',
    Validators.compose([
      Validators.minLength(8),
      Validators.required])
    ]})       
  }

  onSubmit(formdata){
    if(formdata.valid){

      this.getEndereco(formdata.value.cep,(endereco) =>{        
        this.endereco = endereco;
        this.updateCep.emit(formdata.value.cep)      
     });
    }    
  }  

  getEndereco(cep,callback){
    this.appService.getEndereco(cep).then((res) =>{
      var enderecoStr = res.logradouro + ", " + res.bairro + ", " + res.uf;        
      var endereco = !res.erro? this.endereco = enderecoStr: this.endereco = 'Cep inválido';
      callback(endereco)
    })
  }

}


