import { Component, OnInit } from '@angular/core';

import { Product, ProductDTO, UpdateProductDto } from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {id: '', name: ''},
    description: ''
  }
  limit = 10;
  offset = 0;


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts(this.limit, this.offset)
      .subscribe(data => {
        this.products = data;
        this.offset += this.limit;
      });
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    this.productsService.getProduct(id)
      .subscribe(data => {
        this.toggleProductDetail();
        this.productChosen = data;
      });
  }

  createNewProducto() {
    const product: ProductDTO = {
      title: 'Nuevo Producto',
      description: 'Hola mama',
      images: ['https://placeimg.com/640/480/any'],
      price: 1000,
      categoryId: 2,
    };
    this.productsService.create(product).subscribe(
      data => {
        this.products.unshift(data);
      }
    );
  }

  updateProduct() {
    const changes: UpdateProductDto = {
      title: 'nuevo Titulo'
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
        this.products[productIndex] = data;
      });
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id)
      .subscribe(() => {
        const productIndex = this.products.findIndex(item => item.id === this.productChosen.id)
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      });
  }

  loadMore() {
    this.productsService.getAllProducts(this.limit, this.offset)
      .subscribe(data => {
        this.products = this.products.concat(data);
        this.offset += this.limit;

      });
  }

}
