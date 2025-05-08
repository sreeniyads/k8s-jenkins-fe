import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // private backendUrl = 'http://myapp.local/api/hello';  // Update based on backend deployment
  private backendUrl = 'http://localhost:8081/api/hello';
  constructor(private http: HttpClient) {}

  getHelloMessage(): Observable<string> {
    return this.http.get(this.backendUrl, { responseType: 'text' });
  }
}

