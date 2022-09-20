import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user={
    email: '',
    password: ''

  }

  constructor(private authService: AuthService,
    private toastr: ToastrService ) { }

 register(): void{

    console.log(this.user);
    const {email,password}=this.user;
    this.authService.register(email,password ).then(res=>{
      console.log("usuario registrado: ",res);
    })
}

  ngOnInit(): void {
  }

}
