import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user.model';
import {FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';


const headers = new HttpHeaders().set('Content-Type', 'application/json');
const API_ARGS = {headers: headers};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

    getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`api/users`);
   }

   addUser(a): Observable<User> {
    return this.http.post<User>(`api/user`, JSON.stringify(a.value), API_ARGS);
    }

    getUser(users_id:number):Observable<User>{
    return this.http.get <User>( `api/user/` + `${users_id}`);
    }

    ubdateUser(users_id:number,a): Observable<User>{
    return this.http.put<User>( `api/user/` + `${users_id}`,JSON.stringify(a.value),API_ARGS);
    }
    deleteUser(users_id:number): Observable<User>{
    return this.http.delete <User>( `api/user/` + `${users_id}`);
  }
    enableUser(users_id:number): Observable<User>{
    return this.http.get<User>( `api/user/enable/` + `${users_id}`);
  }
}
