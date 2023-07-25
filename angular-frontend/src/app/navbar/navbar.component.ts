import { Component } from '@angular/core';
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons';
import {
  faUser,
  faArrowRightFromBracket,
  faDashboard,
  faTape,
} from '@fortawesome/free-solid-svg-icons';
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
}
