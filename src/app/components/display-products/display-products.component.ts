import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  products$: Object;

  constructor(private _product: DatabaseService) { }

  ngOnInit() {
    this._product.getProducts().subscribe(
      _product => this.products$ = _product
      );
  }
}
