import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() linkGroups: LinkGroup[];
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}

export class LinkGroup {
  name: string;
  links: LinkItem[];
}

export class LinkItem {
  url: string;
  name: string;
}