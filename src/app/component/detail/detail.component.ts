import { Component, OnInit } from '@angular/core';
import { Detail } from 'src/app/model/board/Detail';

/* 셀렉트박스 인터페이스 */
interface AssetType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detail: Detail[] = [
    { seq: '1', asset_no: 'BNO_0001_T', chng_rsn: '신규 등록', chng_date: new Date() },
    { seq: '2', asset_no: 'BNO_0001_T', chng_rsn: '사용 개시', chng_date: new Date() }
  ];
  displayedColumns: string[] = ['seq', 'asset_no', 'chng_rsn', 'chng_date'];

  /* 셀렉트박스 */
  assetType: AssetType[] = [
    {value: 'A', viewValue: '전체'},
    {value: 'N', viewValue: '노트북'},
    {value: 'M', viewValue: '모니터'},
    {value: 'T', viewValue: '테이블'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
