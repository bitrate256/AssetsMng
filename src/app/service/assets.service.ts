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

  read(assetNo: string): Observable<any> {
    return this.httpClient.get(`${baseURL}/${assetNo}`);
  }

  create(data: { assetNo: string; assetTypeCode: string;
    username: string; assetmodelname: string;
    assetserialno: string; usestartdate: Date;
    assetstat: string; assetpjtloc: string;
    etc: string; regdate: Date;
  }): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(assetNo: string, data: string): Observable<any> {
    return this.httpClient.put(`${baseURL}/${assetNo}`, data);
  }

  delete(assetNo: string): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${assetNo}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(username: string): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${username}`);
  }
}
