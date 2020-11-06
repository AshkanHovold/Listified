import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  linkGroups: LinkGroup[];
  constructor() { }

  ngOnInit(): void {
  }

}

export class LinkGroup {
  name: string;
  links: LinkItem
}

export class LinkItem {
  url: string;
  name: string;
}