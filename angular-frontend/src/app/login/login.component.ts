import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent implements OnInit {
  valForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.valForm = this._fb.group({
      username: '',
      password: '',
    });
  }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onFormSubmit() {
    if (this.valForm.valid) {
      const { username, password } = this.valForm.value;
      if (!username || !password) {
        alert('Champ obligatoire!');
      } else {
        this.authService.login(username, password).subscribe({
          next: (data) => {
            this.storageService.saveUser(data);

            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
            //this.router.navigateByUrl('/clients');
            console.log('user role: ' + this.roles);
            /* if (this.roles.includes('ROLE_MODERATOR')) {
              console.log('moderator sign in');
              this.router.navigateByUrl('/moderator');
            }*/
            this.reloadPage();
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
          },
        });
      }
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
