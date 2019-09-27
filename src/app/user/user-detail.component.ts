import {Component, Input, OnInit} from '@angular/core';
import {User} from './user.model';
import {UserService} from './user.service';

@Component({
  selector: 'app-user-detail',
  template: `
    <div *ngIf="user">
      <h2> User Details</h2>
      <ul class="list-group">
        <li class="list-group-item"> First Name :  {{user.firstName}}</li>
        <li class="list-group-item"> Last Name :  {{user.lastName}}</li>
        <li class="list-group-item"> Email : {{user.email}}</li>
        <li class="list-group-item"> Mobile Number : {{user.mobileNumber}}</li>
        <li class="list-group-item"> Gender : {{user.gender}}</li>
        <td>
          <button [routerLink]="['/user',user.usersid]" class="btn btn-sample" style="margin-right: 10px">Edit</button>
          <button [disabled]="isenable(user)" class="btn btn-sample" style="margin-right: 10px" (click)="enableUser(user)">enable</button>

        </td>
      </ul>

    </div>

  `

})
export class UserDetailComponent implements OnInit {
   @Input() user: User;
   users_id:number;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  enableUser(user:User) {
    this.userService.enableUser(user.usersid).subscribe(
      userData => {
      },
      err => console.log(err),
      () =>location.reload()
    );
  }

  isenable(user:User){
    if (user.enabled === true){
      return true;
    }
  }
}
