import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  user$:string;
  usersid: number;
  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    let headers=new HttpHeaders();
    headers=headers.append('Authorization','Basic '+ btoa(`${userName}:${password}`));

    return this.http.get<any> ( '/userData', { headers: headers  })
      .pipe(map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
         user = JSON.parse(localStorage.getItem('currentUser'));
         this.user$=user.roleName;
         this.usersid=user.users_id;

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
      this.usersid=JSON.parse(localStorage.getItem('currentUser')).users_id;
    return this.usersid;
  }

  isAuthenticated(){
    if (JSON.parse(localStorage.getItem('currentUser')))
      return true;
  }
}
