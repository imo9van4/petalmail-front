import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { ViewEmailsPageComponent } from './view-emails-page/view-emails-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DisplayComponent } from './display/display.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SentComponent } from './sent/sent.component';
import { SpamComponent } from './spam/spam.component';
import { TrashComponent } from './trash/trash.component';
import { ComposeComponent } from './compose/compose.component';

//import { fromEventPattern } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'view-emails',
    component: ViewEmailsPageComponent
  },
  {
    path: 'display',
    component: DisplayComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'sent',
    component: SentComponent
  },
  {
    path: 'spam',
    component: SpamComponent
  },
  {
    path: 'trash',
    component: TrashComponent
  },
  {
    path: 'compose',
    component: ComposeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
