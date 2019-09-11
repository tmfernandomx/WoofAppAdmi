import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { reject, isRejected } from 'q';
import { resolve } from 'dns';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Router } from "@angular/router";
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router: Router) { }

  login(email:string, password:string) {

    return new Promise((resolve, rejected)=>{
      this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user=>{
        resolve(user);
      }).catch(err=>rejected(err));
    });
    
  }

  register(email : string, password : string){
    return new Promise((resolve, reject)=> {
      this.AFauth.auth.createUserWithEmailAndPassword(email,password).then(res =>{
        resolve (res)
      }).catch(err => reject(err))
    })
      
  }

  logout(){
    this.AFauth.auth.signOut().then(() =>{
      this.router.navigate(['/loginn']);
    });
  }
}
