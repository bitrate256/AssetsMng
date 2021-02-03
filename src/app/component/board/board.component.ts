import { Component, OnInit, Inject } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

/* 셀렉트박스 인터페이스 */
interface AssetType {
  value: string;
  viewValue: string;
}

/* 등록창 인터페이스 */
/*
export interface DialogData {
  animal: string;
  name: string;
}*/

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Post[] = [
     { asset_no: '01', asset_type_code: 'T', user_name: '홍길동', asset_model_name: '테이블', asset_serial_no: '1111', use_start_date: new Date(), asset_stat: 'N', asset_pjt_loc: '본사', etc: '비고내용', reg_date: new Date()}
  ];
  displayedColumns: string[] = ['asset_no', 'asset_type_code', 'user_name', 'asset_model_name', 'asset_serial_no', 'use_start_date', 'asset_stat', 'asset_pjt_loc', 'etc', 'reg_date'];

  /* 셀렉트박스 */
  assetType: AssetType[] = [
    {value: 'A', viewValue: '전체'},
    {value: 'N', viewValue: '노트북'},
    {value: 'M', viewValue: '모니터'},
    {value: 'T', viewValue: '테이블'}
  ];
  /*
  // MatPaginator Inputs
    length = 100;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    // MatPaginator Output
    pageEvent: PageEvent;

    setPageSizeOptions(setPageSizeOptionsInput: string) {
      if (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      }
    }
  */
  constructor() { }

  ngOnInit(): void {
  }

}
