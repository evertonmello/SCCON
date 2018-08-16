import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatButtonModule}  from '@angular/material';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchListComponent } from './pages/clients/search-list/search-list.component';
import { FormComponent } from './pages/clients/form/form.component';
import { CepComponent } from './pages/clients/cep/cep.component';
import { AppService } from './services/app.service'

const appRoutes: Routes = [
  { path: 'listagem', component: ClientsComponent },
  { path: 'cadastro', component: FormComponent },
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
    CepComponent,
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )  
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
