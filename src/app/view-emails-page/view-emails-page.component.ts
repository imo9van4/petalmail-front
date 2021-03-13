import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { Emails } from '../interfaces/emails.interface';

@Component({
  selector: 'app-view-emails-page',
  templateUrl: './view-emails-page.component.html',
  styleUrls: ['./view-emails-page.component.scss']
})
export class ViewEmailsPageComponent implements OnInit {
  public emails: Emails[] = []
  public singleMessage;
  constructor(private readonly rest: RestService, private router: Router) { }


  ngOnInit(): void {
    this.rest.getUserEmails().then(res => {
      this.emails = res.data;
      console.log(res);
    });
  }


  viewMessage(id){
    this.rest.viewMessage(id).then(res=> {
      this.singleMessage = res;
      this.rest.singleMessage = this.singleMessage.data;
      //console.log(this.rest.singleMessage);
      this.router.navigate(["/display"]);
    });
  }
}
