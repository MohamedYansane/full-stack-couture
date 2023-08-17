import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { EventBusService } from '../_shared/event-bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  faBars = faBars;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  isAdmin = false;
  isMod = false;
  isUser = false;
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

      for (let role of this.roles) {
        console.log(role);
        if (role === 'ROLE_ADMIN') {
          this.isAdmin = true;
        } else if (role === 'ROLE_MODERATOR') {
          this.isMod = true;
        } else {
          this.isUser = true;
        }
      }
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      console.log('moderator board' + this.showModeratorBoard);
      this.username = user.username;
      console.log('username' + this.username);
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
