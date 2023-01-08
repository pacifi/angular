import { Component } from '@angular/core';

import { Product } from './models/product.model';
import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = "";

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {
  }

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser() {
    this.usersService.create({
      name: 'Nuevo Usuario',
      email: 'pacifi@gmail.com',
      password: '123'
    }).subscribe(rta => {
      console.log(rta)
    })
  }

  login() {
    this.authService.login('pacifi@gmail.com', '123')
      .subscribe(rta => {

        this.token = rta.access_token;
        console.log(this.token, "login tokennnn");
      })
  }

  getProfile() {
    this.authService.profile(this.token)
      .subscribe(profile => {
        console.log(profile);
      });
  }
}

