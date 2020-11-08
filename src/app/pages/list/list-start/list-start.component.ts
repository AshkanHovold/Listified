import { Component, OnInit } from '@angular/core';
import { LinkGroup, LinkItem } from 'src/app/standard/sidenav/sidenav.component';

@Component({
  selector: 'app-list-start',
  templateUrl: './list-start.component.html',
  styleUrls: ['./list-start.component.scss']
})
export class ListStartComponent implements OnInit {

  linkGroups: LinkGroup[] = [];
  constructor() { }

  ngOnInit(): void {
    this.linkGroups = [
      { name: "Lists", links: this.getMainLinks() }
    ]
  }
  getMainLinks(): LinkItem[] {
    return [{ name: "Create", url: "/lists/new" }, { name: "View all", url: "/lists/all" }]
  }


}
