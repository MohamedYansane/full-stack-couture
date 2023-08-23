import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.scss'],
})
export class RegisterUserComponent {
  valForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  hide = true;
  constructor(
    private _fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.valForm = this._fb.group({
      username: '',
      email: '',
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
      const { username, email, password } = this.valForm.value;
      if (!username || !password || !email) {
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
