import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { AppService } from './../../../services/app.service'

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
  constructor( private formbuilder:FormBuilder, private appService:AppService ) { }

  ngOnInit() {
    this.formData = this.formbuilder.group({
      nome:['asdsaadsad', Validators.required],
      email:['', Validators.compose([Validators.required,Validators.email])],
      telefone:['12345678', Validators.compose([Validators.required,Validators.pattern('^[0-9]{8,9}$')])],
      cep:['13313530',Validators.compose([Validators.required, Validators.pattern('^[0-9]{8,8}$')])]
    });
  }

  onSubmit(form){
    if(form.valid){
        var endereco = this.appService.getEndereco(form.value.cep).then((res) =>{
          this.endereco = res.logradouro + ", " + res.bairro + ", " + res.uf;
        });
    }
  }

  matcher = new MyErrorStateMatcher();
}
