import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { StartComponent } from './start.component';

const routes: Routes = [{ path: '', component: StartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, SharedModule]
})
export class StartRoutingModule { }
