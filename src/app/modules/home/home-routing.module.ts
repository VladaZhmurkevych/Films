import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: 'posts', component: HomePageComponent},
  {path: 'users/:id', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomeRoutingModule { }
