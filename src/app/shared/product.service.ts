import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '学习angular时候创建的第一个商品', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '学习angular时候创建的第二个商品', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 3.99, 4.5, '学习angular时候创建的第三个商品', ['电子产品', '硬件设备']),
    new Product(4, '第四个商品', 4.99, 1.5, '学习angular时候创建的第四个商品', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.99, 3.5, '学习angular时候创建的第五个商品', ['电子产品', '硬件设备']),
    new Product(6, '第六个商品', 6.99, 2.5, '学习angular时候创建的第六个商品', ['电子产品', '硬件设备'])
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02', '张三', 3, '东西不错'),
    new Comment(2, 2, '2017-02-03', '李四', 4, '东西很好'),
    new Comment(3, 3, '2017-02-04', '王五', 3, '东西不错'),
    new Comment(1, 1, '2017-02-02', '张三', 3, '东西不错'),

  ];

  constructor() {

  }
  // 获取所有的商品
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}



export class Product {
  // @ts-ignore
  constructor(
    public  id: number,
    public  title: string,
    public  price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}

}

export class Comment {
  constructor (public id: number,
               public productId: number,
               public timestamp: string,
               public  user: string,
               public  rating: number,
                public content: string) {

}
}


