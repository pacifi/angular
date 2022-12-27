import {Component, Input} from '@angular/core';
import {Product} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = "https://www.w3schools.com/howto/img_avatar.png";
  showImage = true;

  products: Product[] = [
    {
      id: "1",
      name: "luffy",
      price: 20,
      image: 'assets/images/luffy.jpg'
    },
    {
      id: "2",
      name: "Boa",
      price: 50,
      image: 'assets/images/boa.jpg'
    },
    {
      id: "3",
      name: "Robin",
      price: 80,
      image: 'assets/images/robin1.jpg'
    },
  ]

  onLoaded(img: string) {
    console.log("log padre", img)
  }

  toggleImg() {
    this.showImage = !this.showImage;
  }
}
