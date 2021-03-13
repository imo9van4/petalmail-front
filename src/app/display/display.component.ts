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
  public singleMessage;
  public deleteEmail;

  constructor(private readonly rest: RestService) { }

  ngOnInit(): void {
   this.singleMessage = this.rest.singleMessage[0];
    //console.log(this.singleMessage);
   // this.deleteMessage = this.rest.deleteMessage[0];
    console.log(this.deleteMessage);
  }

  deleteMessage(id){
    this.rest.deleteMessage(id);
  }

}
