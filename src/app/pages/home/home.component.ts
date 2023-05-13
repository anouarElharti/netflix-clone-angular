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
  trendingMovies: any = [];
  actionMovies: any = [];
  adventureMovies: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.getActionMovies();
    this.getAdventureMovies();
  }

  // Banner Data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }
  // Trending Data
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      this.trendingMovies = result.results;
    });
  }
  // Action movies
  getActionMovies() {
    this.service.actionMoviesApiData().subscribe((result) => {
      this.actionMovies = result.results;
    });
  }
  // Adventure Movies
  getAdventureMovies() {
    this.service.adventureMoviesApiData().subscribe((result) => {
      this.adventureMovies = result.results;
    });
  }
}
