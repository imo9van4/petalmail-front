import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JwtService } from '../jwt.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public email: string = '';
  public password: string = '';
  public errorMsg: string = '';

  constructor(
    private readonly rest: RestService,
    private readonly jwtService: JwtService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    this.rest.logIn({ 
      email: this.email, 
      password: this.password 
    }).then(res => {
      if (res.error) {
        console.log('logIn', res)
        this.errorMsg = res.msg;
      } else {
        console.log('logIn', res)
        this.jwtService.setJwt(res.data);
        this.router.navigate(['/view-emails'])
      }
    });
  }
}
