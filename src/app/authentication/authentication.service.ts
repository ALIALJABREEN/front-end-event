import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user$:string;
  users_id: number;
  constructor(private http: HttpClient) { }

   login(userName: string, password: string) {
    return this.http.post<any> ( '/userData', { userName, password  })
      .pipe(map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          user.authdata = btoa(`${userName}:${password}`);
          localStorage.setItem('currentUser', JSON.stringify(user));
          user = JSON.parse(localStorage.getItem('currentUser'));
         // this.user$=user.roleName;
         // this.users_id=user.usersid;
        }
        return user;
      }));
  }

  logout() {
      // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

   getRole(){
    if (JSON.parse(localStorage.getItem('currentUser')))
      this.user$=JSON.parse(localStorage.getItem('currentUser')).roleName;
      return this.user$;
  }

   getUserId(){
    if (JSON.parse(localStorage.getItem('currentUser')))
      this.users_id=JSON.parse(localStorage.getItem('currentUser')).users_id;
    return this.users_id;
  }

  isAuthenticated(){
    if (JSON.parse(localStorage.getItem('currentUser')))
      return true;
  }
}
