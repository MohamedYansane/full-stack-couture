import { Component } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss']

})
export class HeaderComponent {
  faBars = faBars;



}
