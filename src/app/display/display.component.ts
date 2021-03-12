import { Component, OnInit } from '@angular/core';
import { Emails } from '../interfaces/emails.interface';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public emails: Emails[] = []

  constructor(private readonly rest: RestService) { }

  ngOnInit(): void {
    this.rest.getUserEmails().then(res => {
      this.emails = res.data;
      console.log(res);
    });
  }

}
