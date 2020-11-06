import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {
  @Input() links: Link[];
  constructor() { }

  ngOnInit(): void {
  }

}
export class Link {
  url: string;
  text: string;
}
