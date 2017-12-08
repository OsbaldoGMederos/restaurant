import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlatillosService {

  constructor(private http: Http) { }

  getPlatillos() {
    return this.http.get('http://localhost:3000/api/platillos')
    .map(res => res.json());
  }

}
