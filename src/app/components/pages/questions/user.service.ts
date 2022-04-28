import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from 'src/app/help';
import { User } from 'src/app/shared/shared-models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public addUser(user: User) {
    return this.http.post(`${baseURL}/user/`, user);
  }
}
