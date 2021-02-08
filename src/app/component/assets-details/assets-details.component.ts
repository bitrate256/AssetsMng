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
    this.getAssets(this.route.snapshot.paramMap.get('asset_no'));
  }

  getAssets(asset_no: string): void {
    this.assetsService.read(asset_no)
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

    this.assetsService.update(this.currentAssets.asset_no, data)
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
    this.assetsService.update(this.currentAssets.asset_no, this.currentAssets)
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
    this.assetsService.delete(this.currentAssets.asset_no)
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