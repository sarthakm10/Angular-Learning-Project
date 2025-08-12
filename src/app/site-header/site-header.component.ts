import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'robot-shop-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  showSignOutMenu: boolean = false;
  cartItemCount: number = 0;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
      next: (user) => { this.user = user }
    });

    this.cartService.getCart().subscribe({
      next: (cart) => {
        this.cartItemCount = cart.length;
      }
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
