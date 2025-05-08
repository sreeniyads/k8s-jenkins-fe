import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<h2>Spring Boot Response: {{ message }}</h2>',
})
export class AppComponent implements OnInit {
  message = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getHelloMessage().subscribe(
      response => this.message = response,
      error => console.error('Error:', error)
    );
  }
}