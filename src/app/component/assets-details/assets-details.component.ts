import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../../service/assets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class AssetsDetailsComponent implements OnInit {
  currentAssets = '';
  message = '';

  constructor(
    private assetsService: AssetsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    // 하단의 getAssets 변수 타입을 string 으로 선언시 이쪽 부분은 string 이 아님.
    // 이 paramMap.get 의 타입은 어디서?
    this.getAssets(this.route.snapshot.paramMap.get('assetNo'));
  }

  // asset_no 타입 지정 문제 해결 필요
  // 카멜케이스 사용할 것. 언더바 사용했기 때문에 오류 발생함.
  getAssets(assetNo: string): void {
    this.assetsService.read(assetNo)
      .subscribe(
        assets => {
          this.currentAssets = assets;
          console.log(assets);
        },
        error => {
          console.log(error);
        });
  }
/*
  setAvailableStatus(status): void {
    const data = {
      name: this.currentAssets.name,
      description: this.currentAssets.description,
      available: status
    };

    this.assetsService.update(this.currentAssets.assetNo, data)
      .subscribe(
        response => {
          this.currentAssets.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
*/
  updateAssets(): void {
    this.assetsService.update(this.currentAssets.assetNo, this.currentAssets)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The assets was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAssets(): void {
    this.assetsService.delete(this.currentAssets.assetNo)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/assets']);
        },
        error => {
          console.log(error);
        });
  }
}
