import { Component, OnInit } from '@angular/core';
import { Emails } from '../interfaces/emails.interface';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  public emails: Emails[] = []
  constructor(private readonly rest: RestService, private router: Router) { }

  ngOnInit(): void {
   /* displayEmails() {
      this.rest.displayEmails().then( res => {
        this.emails = res.data;
        console.log(this.emails);
      });
    }*/
  }

  
  
 addEmails(){
        this.rest.addEmails();
     }

    /* deleteEmails(id) {
      this.deleteEmails();
     }*/

}
