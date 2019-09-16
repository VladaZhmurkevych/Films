import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import {HomeRoutingModule} from './home-routing.module';
import {State, StateObservable, Store, StoreModule} from "@ngrx/store";
import {Actions, EffectsModule} from "@ngrx/effects";
import {PostEffects} from "./post.effects";
import store from "../../store";
import {PostService} from "./post.service";
import {PostApiService} from "./post-api.service";
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [PostComponent, HomePageComponent],
  exports: [
    PostComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([PostEffects]),
    StoreModule.forRoot(store),
  ],
  providers: [
    PostService,
    PostApiService,
    Actions
  ]
})
export class HomeModule { }
