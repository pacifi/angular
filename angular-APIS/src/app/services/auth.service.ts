import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Auth } from "../models/auth.model";
import { User } from "../models/user.model";
import { TokenService } from "./token.service";
import { switchMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.API_URL}/api/auth`

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
  }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/login`, {email, password})
      .pipe(
        tap(response => this.tokenService.saveToke(response.access_token))
      );
  }

  getProfile() {
    // const headers = new HttpHeaders();
    // headers.set('Autorization', `Bearer ${token}`)


    return this.http.get<User>(`${this.apiUrl}/profile`,
      {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        //   // 'Content-type': 'application/json'
        // }
      });
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.getProfile()))

  }
}
