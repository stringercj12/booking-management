import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menu: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.menu = [
      {
        id: 1,
        title: 'Dashboard',
        path: '/',
        iconName: 'dashboard'
      },
      {
        id: 2,
        title: 'Graph',
        path: '/graph',
        iconName: 'graph'
      },
      {
        id: 3,
        title: 'Appointments',
        path: '/appointments',
        iconName: 'appointments'
      },
      {
        id: 4,
        title: 'Enquiries',
        path: '/enquiries',
        iconName: 'enquiries'
      },
      {
        id: 5,
        title: 'Messages',
        path: '/messages',
        iconName: 'messages'
      },
      {
        id: 6,
        title: 'Users',
        path: '/users',
        iconName: 'users'
      },
      {
        id: 7,
        title: 'Settings',
        path: '/settings',
        iconName: 'settings'
      },
    ];
  }

}
