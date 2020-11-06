import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import { Router } from '@angular/router';
import { Button } from 'src/app/standard/button-group/button-group.component';
import { Link } from 'src/app/standard/subnav/subnav.component';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  list: any;
  msg: string;
  valid: boolean;
  multiList: boolean;
  comments: boolean;
  todo: boolean;
  buttons: Button[];
  links: Link[];
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.list = { id: this.dataService.getNewId(), name: "", multiList: true, comments: true, todo: false, items: [] };
    this.getButtons();
    this.getLinks();
  }

  getButtons() {
    this.buttons = [
      {text:"Create", disabled: !this.valid, clickEvent: this.createList},
      {text:"Cancel", disabled: false, clickEvent: this.cancel}
    ]
  }

  getLinks() {
    this.links = [
      {text:"Tab 1", url:"tab1"},
      {text:"Tab 2", url:"tab2"},
      
    ]
  }

  createList = async():Promise<void> => {
    await this.dataService.setDataToStorage(Constants.LIST, this.list.id, this.list);
    this.router.navigate(["/lists"]);
  }

  validate() {

    if (!this.list.name) {
      this.msg = "List must have a name"
      this.valid = false;
    } else if (this.list.name.length < 3) {
      this.msg = "List name must be atleast 3 characters long";
      this.valid = false;
    } else {
      this.msg = "";
      this.valid = true;
    }
    this.getButtons();
  }

  cancel = (): void => {
    this.router.navigate(['/lists']);
  }
}
