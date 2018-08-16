import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgxMaskModule} from 'ngx-mask'

import { MaterialMdl } from './material.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchListComponent } from './pages/clients/search-list/search-list.component';
import { FormComponent } from './pages/clients/form/form.component';
import { AppService } from './services/app.service';
import { FichaComponent } from './pages/clients/ficha/ficha.component';
import { CepComponent } from './pages/clients/cep/cep.component'

const appRoutes: Routes = [
  { path: 'listagem', component: ClientsComponent },
  { path: 'cadastro', component: FormComponent },
  { path: 'cadastro/:id', component: FormComponent },
  { path: 'ficha', component: FichaComponent },
  { path: 'ficha/:id', component: FichaComponent },
  { path: '',      component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    HomeComponent,
    SearchListComponent,
    FormComponent,
    FichaComponent,
    CepComponent,
  ],
  imports: [    
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialMdl,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )  
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
