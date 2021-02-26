import { Component, OnInit, Inject } from '@angular/core';
import { Assets } from 'src/app/model/board/Assets';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { BoardService } from './../../service/rest-api/board.service';
import { ActivatedRoute } from '@angular/router';

/* 셀렉트박스 인터페이스 */
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

  assets: Assets[] = [
    { assetNo: 'BNO_0001_T', assetTypeCode: '테이블', userName: '홍길동', assetModelName: '테이블1', assetSerialNo: '1111', useStartDate: new Date(), assetStat: '정상', assetPjtLoc: '본사', etc: '비고내용', regDate: new Date()},
    { assetNo: 'BNO_0002_N', assetTypeCode: '노트북', userName: '홍길동', assetModelName: 'ASUS X412F', assetSerialNo: '1111', useStartDate: new Date(), assetStat: '입고', assetPjtLoc: '본사', etc: '비고내용', regDate: new Date()},
    { assetNo: 'BNO_0003_M', assetTypeCode: '모니터', userName: '홍길동', assetModelName: 'SAMSUNG XXX', assetSerialNo: '1111', useStartDate: new Date(), assetStat: '수리완료', assetPjtLoc: '본사', etc: '비고내용', regDate: new Date()}
  ];
  displayedColumns: string[] = ['assetNo', 'assetTypeCode', 'userName', 'assetModelName', 'assetSerialNo', 'useStartDate', 'assetStat', 'assetPjtLoc', 'etc', 'regDate'];
  // boardName: string;
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

  /* 모달창 기능 */
  title = 'angular-website';
  closeResult!: string;

  constructor(private modalService: NgbModal,
              private boardService: BoardService,
              private route: ActivatedRoute) {
    // this.boardName = this.route.snapshot.params.boardName;
  }

  // response => 리스폰스에 결과 담아서 보내기
  ngOnInit(): void {
    this.boardService.getAssets().then(response => {
      this.assets = response;
    });
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
