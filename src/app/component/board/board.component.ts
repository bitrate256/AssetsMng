import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import {PageEvent} from '@angular/material/paginator';

/* 셀렉트박스 */
interface AssetType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Post[] = [
    {assetId : 12, assetCode: 'M', assetName: '모니터', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 11, assetCode: 'M', assetName: '모니터', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 10, assetCode: 'N', assetName: '노트북', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 9, assetCode: 'N', assetName: '노트북', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 8, assetCode: 'N', assetName: '노트북', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 7, assetCode: 'N', assetName: '노트북', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 6, assetCode: 'M', assetName: '모니터', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 5, assetCode: 'N', assetName: '노트북', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 4, assetCode: 'M', assetName: '모니터', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 3, assetCode: 'N', assetName: '노트북', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 2, assetCode: 'M', assetName: '모니터', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 1, assetCode: 'T', assetName: '책상', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()}
  ];
  displayedColumns: string[] = ['assetId', 'assetCode', 'assetName', 'createdAt', 'modifiedAt'];

  /* 셀렉트박스 */
  assetType: AssetType[] = [
    {value: 'A', viewValue: '전체'},
    {value: 'N', viewValue: '노트북'},
    {value: 'M', viewValue: '모니터'},
    {value: 'T', viewValue: '테이블'}
  ];

// MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
/*
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

