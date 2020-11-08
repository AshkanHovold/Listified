import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [    
  {
    path: "lists", loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  { path: 'start', loadChildren: () => import('./pages/start/start.module').then(m => m.StartModule) }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
