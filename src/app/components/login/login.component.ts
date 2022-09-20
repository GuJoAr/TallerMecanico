import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email: '',
    password: ''
  }

  ngOnInit(): void {
    
  }

  constructor(private authService: AuthService,
    private toastr: ToastrModule) { }

  logIn(){
    console.log(this.user);
    const{email,password}=this.user;
      this.authService.login(email,password).then(res=>{
        console.log("inicio sesion: ",res);
        })
       
  }

}
