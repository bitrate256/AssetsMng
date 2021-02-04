import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { BoardComponent } from './component/board/board.component';
import { DetailComponent } from './component/detail/detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'board', component: BoardComponent},
  {path: 'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
