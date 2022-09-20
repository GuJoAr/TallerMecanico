import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth,
    private toastr: ToastrService) 
    { }
   




    async register(email:string,password:string){
    try{
     const {user}= await this.afauth.createUserWithEmailAndPassword(email, password);
     if (user){
      user.sendEmailVerification();
      window.open("/login","_self")
     }
    } catch(err){
      this.toastr.error('Verifica si tus datos son correctos.', 'Ha ocurrido un error!');
    }
  }


async login(email:string,password:string){
  try{
    const {user}= await this.afauth.signInWithEmailAndPassword(email, password);
    if (user){
     window.open("/","_self")
    }
   } catch(err){
     this.toastr.error('Verifica si tus datos son correctos.', 'Ha ocurrido un error!');
   }
}

getUserLogged(){
  return this.afauth.authState;
}


logout(){
  this.afauth.signOut();  
}

}