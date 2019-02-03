import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private serverApi = 'http://localhost:8000';

  sendEmail(data): Observable<any> {
    return this.http.post(this.serverApi, data);
  }
}
