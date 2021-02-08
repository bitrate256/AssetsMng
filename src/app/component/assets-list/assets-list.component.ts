import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../../service/assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {
  assets: any;
  currentAssets = null;
  currentIndex = -1;
  user_name = '';

  constructor(private assetsService: AssetsService) { }

  ngOnInit(): void {
    this.readAssets();
  }

  readAssets(): void {
    this.assetsService.readAll()
      .subscribe(
        assets => {
          this.assets = assets;
          console.log(assets);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readAssets();
    this.currentAssets = null;
    this.currentIndex = -1;
  }

  // 타입 명시 이전 원본 -> (assets, index)
  // 
  setCurrentAssets(assets: null, index: number): void {
    this.currentAssets = assets;
    this.currentIndex = index;
  }

  deleteAllAssets(): void {
    this.assetsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readAssets();
        },
        error => {
          console.log(error);
        });
  }

  searchByName(): void {
    this.assetsService.searchByName(this.user_name)
      .subscribe(
        assets => {
          this.assets = assets;
          console.log(assets);
        },
        error => {
          console.log(error);
        });
  }
}