import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TextAreaComponent } from 'src/app/input/text-area/text-area.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddItemToListComponent } from './add-item-to-list/add-item-to-list.component';
import { AllListsComponent } from './all-lists/all-lists.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { ListStartComponent } from './list-start/list-start.component';
import { NewListComponent } from './new-list/new-list.component';
import { ViewListComponent } from './view-list/view-list.component';



const routes: Routes = [{
  path: '',
  component: ListStartComponent,
  children: [
    {
      path: 'all',
      component: AllListsComponent
    },
    {
      path: 'edit/:listId',
      component: EditListComponent,
    },
    {
      path: 'new',
      component: NewListComponent,
    },
    {
      path: 'view/:listId',
      component: ViewListComponent
    },
    {
      path: 'add-item/:listId',
      component: AddItemToListComponent
    }
  ],
}];



@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), SharedModule],
  declarations: [
    ListStartComponent
    , AllListsComponent
    , EditListComponent
    , NewListComponent
    , ViewListComponent
    , AddItemToListComponent],
  exports: [ListStartComponent]
})
export class ListModule {

}