import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewEmailsPageComponent } from './view-emails-page/view-emails-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
//import { fromEventPattern } from 'rxjs';
import { DisplayComponent } from './display/display.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SentComponent } from './sent/sent.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';
import { ComposeComponent } from './compose/compose.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ViewEmailsPageComponent,
    RegisterPageComponent,
    DisplayComponent,
    ContactsComponent,
    SentComponent,
    SpamComponent,
    TrashComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
