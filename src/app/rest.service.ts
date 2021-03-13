import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  public singleMessage;
  

  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService
  ) { }

  register(body): Promise<any> {
    return this.http
      .post(`${environment.apiUrl}/register`, body)
      .toPromise();
  }

  logIn(body: { email: string; password: string }): Promise<any> {
    return this.http
      .post(`${environment.apiUrl}/log-in`, body)
      .toPromise(); 
  }

  getUserEmails(): Promise<any> {
    const jwt = this.jwtService.getJwt();

    return this.http
      .get(
        `${environment.apiUrl}/emails`, 
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise()
  }


addEmails(){
    const jwt = this.jwtService.getJwt();

    return this.http
    .put(
        `${environment.apiUrl}/emails`, 
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise()
  }

deleteMessage(id){
  const jwt = this.jwtService.getJwt();

  return this.http
    .delete(
      `${environment.apiUrl}/delete/emails/${id}`,
      { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise()
  }

viewMessage(id){
  const jwt = this.jwtService.getJwt();

  return this.http
    .get(
      `${environment.apiUrl}/view/emails${id}`,
      { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .toPromise()
  }

  writeMessage(body){
    const jwt = this.jwtService.getJwt();

    return this.http
    .put(
      `${environment.apiUrl}/write/emails`, body, {
        headers: { Authorization: `Bearer ${jwt}` } }
    )
      .toPromise() 
      }
    
  }
