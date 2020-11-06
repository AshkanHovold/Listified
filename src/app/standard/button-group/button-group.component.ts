import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {
  @Input() buttons: Button[]
  constructor() { }

  ngOnInit() {
  }

}
export class Button {
  text:string;
  clickEvent: Function;
  disabled: boolean;
}
