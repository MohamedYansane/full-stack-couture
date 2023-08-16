import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-moderator-dashboard',
  templateUrl: './moderator-dashboard.component.html',
  styleUrls: ['./moderator.scss'],
})
export class ModeratorDashboardComponent {
  content?: string;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.log(err);
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = 'Error with status: ' + err.status;
        }
      },
    });
  }
}
