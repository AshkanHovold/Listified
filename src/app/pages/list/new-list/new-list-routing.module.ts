import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewListComponent } from "./new-list.component";
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

const routes: Routes = [{
    path: '',
    component: NewListComponent,
    children: [
      {
        path: 'tab1',
        component: Tab1Component,
      },
      {
        path: 'tab2',
        component: Tab2Component,
      }
    ],
  }];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class NewListRoutingModule {
  }