import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Bonnier';
  age = 18;
  img = 'https://w3schools.com/howto/img_avatar.png';
  btnDisable = true
  person = {
    name: 'Bonnier',
    age: 39,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }


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
    const  element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

}
