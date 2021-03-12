import { Component,  HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { TestContacts } from './contacts.model';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
  })

 export class ContactsComponent  {
    register;
    useractivityTimer;
    entries: TestContacts[] =[ {name: 'PetalMail Customer Service', email: 'mailto:customer_service@petalmail.com'},
               {name: 'Mom', email: 'mom@petalmail.com'},
               {name: 'Zack Farmer', email: 'zack@petalmail.com'},
               {name: 'Andrea Rohlf', email: 'andrea@petalmail.com'},
               {name: 'Avneel Singh', email: 'avneel@petalmail.com'},
               {name: 'Alison Griffin', email: 'alison@petalmail.com'},
               {name: 'Zubin Naushad', email: 'zubin@petalmail.com'}
              ]
    //alphabetized = true;
    


  
  @HostListener('window:mousemove') logoutUser() { 
      console.log('it works');
      clearTimeout(this.useractivityTimer);
      this.useractivityTimer=setTimeout(()=>this.router.navigate(['login']), 180000);
    }

  constructor(private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
        this.register = params
        console.log(params)
      })
    }
  
  }
