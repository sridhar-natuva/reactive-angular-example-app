import { Component, OnInit } from '@angular/core';
import coupons from "./coupons.json";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  coupon = '';
  total = 590;
  isApplied = false;
  constructor() { }

  ngOnInit(): void {
  }

  applyCoupon() {
    const valid_coupon = coupons.find(c => c.coupon == this.coupon);
    if (valid_coupon) {
      this.total = this.total * ((100 - valid_coupon.offer_percent) / 100);
      this.isApplied = true;
    }
  }

}
