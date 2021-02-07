import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 구 컴포넌트
import { HomeComponent } from './component/home.component';
import { BoardComponent } from './component/board/board.component';
import { DetailComponent } from './component/detail/detail.component';

// 신규작성
import { AssetsListComponent } from './component/assets-list/assets-list.component';
import { AssetsDetailsComponent } from './component/assets-details/assets-details.component';
import { AssetsCreateComponent } from './component/assets-create/assets-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'board', pathMatch: 'full' },
  {path: 'board', component: AssetsListComponent},
  {path: 'details/:id', component: AssetsDetailsComponent},
  {path: 'create', component: AssetsCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
