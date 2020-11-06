import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//import { StartComponent } from "./pages/start/start.component";
//import { TemplateComponent } from "./pages/template/templates/templates.component";
//import { NewTemplateComponent } from "./pages/template/new-template/new-template.component";
//import { EditTemplateComponent } from "./pages/template/edit-template/edit-template.component";
import { InputHostDirective } from './directives/input-host.directive';
//import { NewItemComponent } from './pages/item/new-item/new-item.component';
//import { EditItemComponent } from './pages/item/edit-item/edit-item.component';
//import { NewListComponent } from './pages/list/new-list/new-list.component';
//import { NewDashboardComponent } from './pages/dashboard/new-dashboard/new-dashboard.component';
//import { EditDashboardComponent } from './pages/dashboard/edit-dashboard/edit-dashboard.component';
//import { AllItemsComponent } from './pages/item/all-items/all-items.component';
import { ItemComponent } from './components/item/item.component';
//import { ThemeManagerComponent } from './pages/theme/theme-manager/theme-manager.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
//import { EditThemeComponent } from './pages/theme/edit-theme/edit-theme.component';
//import { NewThemeComponent } from './pages/theme/new-theme/new-theme.component';
//import { AddItemToListComponent } from './pages/list/add-item-to-list/add-item-to-list.component';
//import { ItemListComponent } from './components/item-list/item-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent,    
    //StartComponent,
    // TemplateComponent,
    // NewTemplateComponent,    
    // EditTemplateComponent,    
    InputHostDirective,    
    // NewItemComponent,
    // EditItemComponent,
    // NewListComponent,    
    // NewDashboardComponent,
    // EditDashboardComponent,    
    // AllItemsComponent,
    ItemComponent,
    //ThemeManagerComponent,        
    ThemePickerComponent,
    // EditThemeComponent,
    // NewThemeComponent,
    // AddItemToListComponent,
    // ItemListComponent,    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, SharedModule],    
  bootstrap: [AppComponent]  
})
export class AppModule { }
