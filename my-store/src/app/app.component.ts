import {Component} from '@angular/core';
import {Product} from './producto.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Bonnier';
  newName = '';
  age = 18;
  img = 'https://w3schools.com/howto/img_avatar.png';
  btnDisable = true
  person = {
    name: 'Bonnier',
    age: 39,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }
  names: string[] = ['Juan', 'Maria', 'Terran'];

  products: Product[] = [
    {
      name: 'robin',
      price: 565,
      image: './assets/images/robin1.jpg',
      category: 'Juguete'
    },
    {
      name: 'boa',
      price: 50,
      image: './assets/images/boa.jpg'
    },
    {
      name: 'luffy',
      price: 50,
      image: './assets/images/luffy.jpg'
    }

  ];

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge() {
    this.person.age = this.person.age + 1

  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);

  }

  public changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

}
