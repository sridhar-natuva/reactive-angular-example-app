import { Product } from './products.model';
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

  constructor(private readonly productsStore: ProductsStore) { }

  products$ = this.productsStore.products$;
  addedProductIds$ = this.productsStore.addedProducts$;

  ngOnInit(): void {
  }

  addProduct(productId: string) {
    this.productsStore.patchState((state) => ({
      addedProductIds: [...state.addedProductIds, productId]
    }));
  }

}
