import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';

@Component({
  selector: 'app-main',
  template: `
   
<div class="container-fluid">
    <router-outlet></router-outlet>
    <div class="text-sm-center"> © 2018 Ali</div>
    </div>
    `
})
export class MainComponent implements OnInit {
  constructor(private auth:AuthenticationService) {}
  ngOnInit() {

  }


  isAdmin() {
    if (this.auth.getRole()==='ROLE_ADMIN')
      return true;
  }
  isOrgenizer() {
    if (this.auth.getRole()=="ROLE_ORGANIZER")
      return true;
  }

  isUser() {
    if (this.auth.getRole()=="ROLE_USER")
      return true;
  }

  isAuthenticated(){
    if (this.auth.isAuthenticated()){
      return true;
    }

  }

  logout(){
    this.auth.logout();
    location.reload();
  }
}
