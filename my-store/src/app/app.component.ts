import { Component, Input } from '@angular/core';
import { Product } from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = "https://www.w3schools.com/howto/img_avatar.png";
  showImage = true;


  onLoaded(img: string) {
    console.log("log padre", img)
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }
}
