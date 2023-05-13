import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  movieDetail: any;
  movieTrailer: any;
  movieCasts: any;

  ngOnInit(): void {
    let getParam = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParam);
    this.getVideoMovie(getParam);
    this.getMovieCasts(getParam);
  }
  // Details Movie
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      this.movieDetail = result;
    });
  }
  // Video Movie
  getVideoMovie(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((element: any) => {
        if (element.type === 'Trailer') {
          this.movieTrailer = element.key;
          console.log('Movie key', this.movieTrailer);
        }
      });
    });
  }
  // Casts
  getMovieCasts(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.movieCasts = result.cast;
      console.log('Casts', result.cast);
    });
  }
}
