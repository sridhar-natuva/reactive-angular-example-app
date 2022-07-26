import { ProductsStore } from './products.store';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductsStore],
})
export class ProductsComponent implements OnInit {

  products$ = this.productsStore.products$;
  constructor(private readonly productsStore: ProductsStore) { }

  ngOnInit(): void {
  }

}
