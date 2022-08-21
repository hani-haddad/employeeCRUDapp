import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  invitationList: any;
  currentUser: User | undefined;

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.user.subscribe(usr => {
      this.currentUser = usr
    });

    console.log(this.invitationList)
  }
  getUserById(usrId: string) {

  }
  logout() {
    this.accountService.logout();
  }

}

