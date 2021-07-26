import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { httpInterceptorProviders } from './auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    MenubarModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
