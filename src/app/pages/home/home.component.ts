import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];

  ngOnInit(): void {
    this.bannerData();
  }

  // Banner Data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }
}
