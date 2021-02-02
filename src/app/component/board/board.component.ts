import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';

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
    {assetId : 3, assetCode: 'N', assetName: '노트북', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 2, assetCode: 'M', assetName: '모니터', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()},
    {assetId : 1, assetCode: 'T', assetName: '책상', content: '변경이력', createdAt: new Date(), modifiedAt: new Date()}
  ];
  displayedColumns: string[] = ['assetId', 'assetCode', 'assetName', 'createdAt', 'modifiedAt'];

  /* 셀렉트박스 */
  assetType: AssetType[] = [
    {value: 'N', viewValue: '노트북'},
    {value: 'M', viewValue: '모니터'},
    {value: 'T', viewValue: '테이블'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
