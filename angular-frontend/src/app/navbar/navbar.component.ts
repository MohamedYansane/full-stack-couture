import { Component } from '@angular/core';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import {
  faUser,
  faArrowRightFromBracket,
  faDashboard,
  faTape,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { EventBusService } from '../_shared/event-bus.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  faUser = faUser;
  faUserRegular = faUserRegular;
  faArrowRightFromBracket = faArrowRightFromBracket;
  faDashboard = faDashboard;
  faTape = faTape;
  faBars = faBars;
  //in sir app module component file
  title = 'Gestion couture';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      console.log('moderator board' + this.showModeratorBoard);
      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log(res);
        this.storageService.clean();
        this.router.navigateByUrl('login');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}