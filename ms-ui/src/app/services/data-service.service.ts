import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Result} from '../modules/model/Result';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private httpModule: HttpClient
  ) {
  }

  retrieveTodo() {
    return this.httpModule.get<Result[]>(`${API_URL}api/results`);
  }

  changeFrequency(milliseconds: number) {
    const params = new HttpParams().set('delay', String(milliseconds));
    const url = `${API_URL}generation/changeDelay/` + milliseconds;
    return this.httpModule.post(url.toString(), ``);
  }

}
