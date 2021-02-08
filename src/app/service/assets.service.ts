import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5000/Assets';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(asset_no: string): Observable<any> {
    return this.httpClient.get(`${baseURL}/${asset_no}`);
  }

  create(data: { asset_no: string; asset_type_code: string;
    user_name: string; asset_model_name: string;
    asset_serial_no: string; use_start_date: Date;
    asset_stat: string; asset_pjt_loc: string;
    etc: string; reg_date: Date;
  }): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(asset_no : string, data : string): Observable<any> {
    return this.httpClient.put(`${baseURL}/${asset_no}`, data);
  }

  delete(asset_no : string): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${asset_no}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(user_name : string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${user_name}`);
  }
}