import {Component, OnInit} from '@angular/core';
import {User, UserService} from "./user-service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "List Of dummy users";

  constructor(private userService: UserService) {}

  users: User[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      return this.users;
    });
  }
}
