import { Component, OnInit } from '@angular/core';
import {AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.page.html',
  styleUrls: ['./loginn.page.scss'],
})
export class LoginnPage implements OnInit {

  public email: string;
public password: string;

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

onSubmitRegister(){
this.auth.register(this.email, this.password).then(auth => {
  console.log(auth)

}).catch(err => console.log(err))
}

}
