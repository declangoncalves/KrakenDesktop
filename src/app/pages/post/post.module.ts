import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PostComponent } from './post.component';
import { routing } from './post.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PostComponent
  ]
})
export default class PostModule {}