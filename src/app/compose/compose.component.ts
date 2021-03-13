import { Component, OnInit } from '@angular/core';
import { Emails } from '../interfaces/emails.interface';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  public emails: Emails[] = []
  composeForm: FormGroup;

  constructor(private readonly rest: RestService, 
    private router: Router, 
    private readonly fb: FormBuilder
  ) {
    this.composeForm = this.fb.group({
      recipient: [null, []],
      subject: [null, []],
      body: [null, []]
    });
  }

  ngOnInit(): void {
 
  }

  
writeMessage(body){
        this.rest.writeMessage(body);
     }

  

}
