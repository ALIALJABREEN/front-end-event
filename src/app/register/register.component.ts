import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

// function passwordMatcher(control: AbstractControl) {
//   return control.get('password').value === control.get('confirm').value
//     ? null : {'nomatch': true};
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    myReactiveForm:FormGroup;
    erro;
  constructor(private formBuilder:FormBuilder,private userService:UserService,private rout:Router) { }

  ngOnInit() {
    this.myReactiveForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/[^\s]+/),
        Validators.pattern(/[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}/)])],
      userName:['', Validators.compose([Validators.required, Validators.minLength(2),

        Validators.maxLength(25),Validators.pattern(/[^\s]+/), Validators.pattern(/^[A-Za-z0-9]{2,25}/)])],

      password: ['', Validators.compose([Validators.required, Validators.minLength(8),
      Validators.maxLength(20),Validators.pattern(/[^\s]+/)])],


      firstName:['', Validators.compose([Validators.required, Validators.minLength(2),
        Validators.maxLength(10),Validators.pattern(/[^\s]+/), Validators.pattern(/^[A-Za-z]/)])],

      lastName :['', Validators.compose([Validators.required, Validators.minLength(2),
        Validators.maxLength(15),Validators.pattern(/[^\s]+/), Validators.pattern(/^[A-Za-z]/)])],

      mobileNumber:['', Validators.compose([Validators.required, Validators.minLength(9),
        Validators.maxLength(9),Validators.pattern(/[^\s]+/), Validators.pattern(/^[5]{1}[0-9]{8}/)])],

      gender: [``,Validators.required],
      role:[``,Validators.required],
    // }, {validator: passwordMatcher}); // pass in the validator function
  });
  }
  onSubmit() {
   // alert(JSON.stringify(this.myReactiveForm.value);
   this.userService.addUser(this.myReactiveForm).subscribe(res =>{
  if (res!==null && res !==undefined){
    console.log(res);
  }

},error => this .erro = error.error.message,() =>{this.rout.navigate(['/login'])});

}
}
