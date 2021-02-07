import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { BoardComponent } from './component/board/board.component';
import { DetailComponent } from './component/detail/detail.component';

// 신규작성
import { BoardListComponent } from './component/board-list/board-list.component';
import { BoardDetailsComponent } from './component/board-details/board-details.component';
import { BoardCreateComponent } from './component/board-create/board-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'board', pathMatch: 'full' },
  {path: 'board', component: BoardListComponent},
  {path: 'details/:id', component: BoardDetailsComponent},
  {path: 'create', component: BoardCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
