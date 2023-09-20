import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string = environment.api_base_common_url;
  constructor(private http: HttpClient) { }

  save(model: any, saveUrl: string): Observable<any> {
    const saveUrlFinal = this.baseURL + saveUrl;
    const body = JSON.stringify(model);
    const headers = { 'content-type': 'application/json' };
    return this.http.post(saveUrlFinal, body, { 'headers': headers });
  }
  saveFile(model: any, saveUrl: string): Observable<any> {
    const saveUrlFinal = this.baseURL + saveUrl;
    return this.http.post<any>(saveUrlFinal, model);
  }
  getall(getUrl: string): Observable<any[]> {
    const getUrlfinal = this.baseURL + getUrl;
    const headers = new HttpHeaders({
      'content-type': 'application/json'
    }).set('max-header-size', '5242880');
    return this.http.get<any>(getUrlfinal, { headers });
  }
  login(url: string) {
    const getUrlfinal = this.baseURL + url;
    const headers = new HttpHeaders({
      'content-type': 'application/json'
    });
    return this.http.get<any>(getUrlfinal, { headers });
  }
}
