import {Component} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCart: Product[] = [];
  total = 0;
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

  onAddToshoppingCart(product: Product) {
    console.log(product);
    this.myShoppingCart.push(product);
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
