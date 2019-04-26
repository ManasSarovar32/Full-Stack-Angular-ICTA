import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]


})
export class ProductListComponent implements OnInit {

  title:string="Product Management";
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;

 products:IProduct[]; 

  toggleImage():void{
    this.showImage=!this.showImage;
  }

  constructor(private ps: ProductService) { }

  ngOnInit():void {
    this.ps.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
  }

}
