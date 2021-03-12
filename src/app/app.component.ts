import { Component, OnInit } from '@angular/core';

import { JwtService } from './jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly jwtService: JwtService) {

  }

  ngOnInit() {

  }
}
