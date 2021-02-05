import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// 브라우저 애니메이션
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 마테리얼
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

// Flex 레이아웃
import { FlexLayoutModule } from '@angular/flex-layout';

// 컴포넌트
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { BoardComponent } from './component/board/board.component';
import { DetailComponent } from './component/detail/detail.component';

// 서비스
import { BoardService } from './service/rest-api/board.service';

// 부트스트랩
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

export const MY_FORMATS = {
  display: {
    dateInput: 'YYYY/MM/DD',
    monthYearLabel : 'MMM YYYY',
  }
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSliderModule,
    FlexLayoutModule,
    MatSelectModule,
    MatPaginatorModule,
    NgbModule,
    MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [BoardService],

  bootstrap: [AppComponent]
})
export class AppModule { }
