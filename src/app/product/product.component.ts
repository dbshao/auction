import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // private products: Array<Product>;
  private products: Product[];
  private keyWord: string;
  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    // 用户停止输入500毫秒以后才去发射
    this.titleFilter.valueChanges.debounceTime(500)
      .subscribe(
        value => this.keyWord = value
      );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();

  }


}
