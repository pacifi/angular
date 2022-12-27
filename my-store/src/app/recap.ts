const username: string = "pacifi";
const sum = (a: number, b: number) => {
  return a + b;
};
sum(2, 3);


class Person {
  private age: number;
  private lastName: string;

  constructor(age: number, lastName: string) {
    this.age = this.age;
    this.lastName = lastName;

  }

  public getAge(): number {
    return this.age;
  }
}

const nico = new Person(15, 'Mamani');

nico.getAge();
