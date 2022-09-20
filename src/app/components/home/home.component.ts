import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private authService: AuthService,
    private _afauth: AngularFireAuth)
     { }

     userLogged = this.authService.getUserLogged();

  ngOnInit(): void {
  }

  
  logout(){
    this.authService.logout();  
  }

  

}
