import { Component, OnInit } from '@angular/core';
import { AuthService } from './../servicios/auth.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  constructor(public authService :AuthService) { }

  ngOnInit() {
  }


  Onlogout(){

this.authService.logout();
  }

}
