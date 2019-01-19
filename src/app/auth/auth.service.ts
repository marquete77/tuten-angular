import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_APP_NAME, API_MAIN_URL, API_USER_URL, KEY_TOKEN, KEY_USER_EMAIL, KEY_USER_NAME, KEY_USER_LASTNAME, KEY_CREDENTIALS } from "../../shared/constants";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private isLogin: boolean = false;

  constructor(
    private http: HttpClient
  ) {
    this.isLogin = (localStorage.getItem(KEY_CREDENTIALS) == 'true');
  }

  public userLogin(credentials: Credentials) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'password': credentials.password,
        'app': API_APP_NAME
      })
    };

    let email = credentials.email.replace('@', '%40');

    return this.http.put(`${API_MAIN_URL}${API_USER_URL}/${email}`, null, options)
      .pipe(
        map((response: any) => {
          localStorage.setItem(KEY_TOKEN, response.sessionTokenBck);
          localStorage.setItem(KEY_USER_EMAIL, response.email);
          localStorage.setItem(KEY_USER_NAME, response.firstName);
          localStorage.setItem(KEY_USER_LASTNAME, response.lastName);
          localStorage.setItem(KEY_CREDENTIALS, 'true');
          return response;
        })
      );
  }

  public isAuthenticated(): boolean {
    return this.isLogin;
  }

}

class Credentials {
  public email: string;
  public password: string;
}
