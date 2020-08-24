import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CommentarylistComponent } from './commentarylist/commentarylist.component';

const routes: Routes = [
  { path: 'categories', component: CategorylistComponent },
  { path: 'commentaries/:ownCommentary', component: CommentarylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
