import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.scss'],
})
export class ForbiddenComponent {
  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {}
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
