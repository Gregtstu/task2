import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./pages/shared/main-layout/main-layout.component";
import {KassaComponent} from "./pages/kassa/kassa.component";
import {ParahodComponent} from "./pages/parahod/parahod.component";

const routes: Routes = [
  {
    path:'', component: MainLayoutComponent, children: [
      {path:'', redirectTo:'/kassa', pathMatch:"full"},
      {path:'kassa', component:KassaComponent},
      {path:'parahod', component:ParahodComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
