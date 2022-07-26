import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Product } from './products.model';

export interface ProductsState {
    products: Product[];
}

@Injectable()
export class ProductsStore extends ComponentStore<ProductsState> {

    constructor() {
        super({
            products: [
                { name: 'A', category: 'cloths', price: 100 },
                { name: 'B', category: 'groceries', price: 100 },
                { name: 'C', category: 'groceries', price: 100 },
                { name: 'D', category: 'electronics', price: 100 },
                { name: 'E', category: 'cloths', price: 100 },
                { name: 'F', category: 'electronics', price: 100 },
                { name: 'G', category: 'cloths', price: 100 },
                { name: 'H', category: 'electronics', price: 100 }
            ]
        });
    }

    readonly products$: Observable<Product[]> = this.select(state => state.products);

    
}