// board.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ApiValidationService } from './common/api-validation.service';
import { Assets } from 'src/app/model/board/Assets';
import { ApiReponseList } from 'src/app/model/common/ApiReponseList';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient
  //             private apiValidationService: ApiValidationService
  ) {}

  // private getBoardUrl = '/api/v1/board';
  private getBoardUrl = 'http://localhost:5000/Assets';

  getAssets(): Promise<Assets[]> {
    const getAssetsUrl = this.getBoardUrl;
    return this.http.get<ApiReponseList>(getAssetsUrl)
      .toPromise()
      // .then(this.apiValidationService.validateResponse)
      .then(response => {
        return response.list as Assets[];
      })
      .catch(response => {
        alert('[리스트조회 중 오류 발생]\n' + response.error.msg);
        return Promise.reject(response.error.msg);
      });
  }
}
