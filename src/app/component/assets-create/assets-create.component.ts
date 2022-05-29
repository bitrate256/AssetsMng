import { Component, OnInit } from '@angular/core';
import { AssetsService } from '../../service/assets.service';

@Component({
  selector: 'app-assets-create',
  templateUrl: './assets-create.component.html',
  styleUrls: ['./assets-create.component.css']
})
export class AssetsCreateComponent implements OnInit {
  assets = {
    asset_no: '',
    asset_type_code: '',
    user_name: '',
    asset_model_name: '',
    asset_serial_no: '',
    use_start_date: new Date,
    asset_stat: '',
    asset_pjt_loc: '',
    etc: '',
    reg_date: new Date
  };
  submitted = false;

  constructor(private assetsService: AssetsService) { }

  ngOnInit(): void {
  }

  createAssets(): void {
    const data = {
      asset_no: this.assets.asset_no,
      asset_type_code: this.assets.asset_type_code,
      user_name: this.assets.user_name,
      asset_model_name: this.assets.asset_model_name,
      asset_serial_no: this.assets.asset_serial_no,
      use_start_date: this.assets.use_start_date,
      asset_stat: this.assets.asset_stat,
      asset_pjt_loc: this.assets.asset_pjt_loc,
      etc: this.assets.etc,
      reg_date: this.assets.reg_date
    };

    this.assetsService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAssets(): void {
    this.submitted = false;
    this.assets = {
      asset_no: '',
      asset_type_code: '',
      user_name: '',
      asset_model_name: '',
      asset_serial_no: '',
      use_start_date: new Date,
      asset_stat: '',
      asset_pjt_loc: '',
      etc: '',
      reg_date: new Date
    };
  }

}