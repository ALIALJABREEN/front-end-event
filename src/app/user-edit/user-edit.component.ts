import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../user/user.model';
import {UserService} from '../user/user.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
  myReactiveForm: FormGroup;
  users_id: number;
  user: User
  constructor(private formBuilder: FormBuilder, private userService: UserService ,private route: ActivatedRoute,private auth:AuthenticationService) { }

  ngOnInit() {
      this.route.params.subscribe((value: any) =>{
      this.users_id = value.usersid;
      });
      this.userService.getUser(this.users_id).subscribe(value => {
      this.user = value;
      this.myReactiveForm.patchValue(this.user as any);
    });

    this.myReactiveForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      userName: ['', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]/)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z]/)])],
      firstName: ``,
      lastName : ``,
      mobileNumber: ``,
      gender: ``,
      role:``
      // }, {validator: passwordMatcher}); // pass in the validator function
    });
  }
  onSubmit() {
    // alert(JSON.stringify(this.myReactiveForm.value);
    this.userService.ubdateUser(this.users_id,this.myReactiveForm).subscribe(res =>{
      if (res!==null && res !==undefined){
        console.log(res);
      }
    },(error) =>console.log(error),() =>{});


  }
   deleteUser(){
    this.userService.deleteUser(this.users_id).subscribe(res =>{
      if (res!==null && res !==undefined){
        console.log(res);
      }
    },(error) =>console.log(error),() =>{})
  }

  isAdmin(){
    if (this.auth.getRole()==='ROLE_ADMIN')
      return true;
  }
  isOrgenizer(){
    if (this.auth.getRole()=="ROLE_ORGANIZER")
      return true;
  }

  isUser(){
    if (this.auth.getRole()=="ROLE_USER")
      return true;
  }



}
