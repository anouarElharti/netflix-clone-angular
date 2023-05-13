import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  baseurl = 'https://api.themoviedb.org/3';
  apikey = '28016261ab2edeedd61326f5c3356197';
  action_movie = '28'; // action = 28
  adventure_movie = '12'; // adventure =

  // Banner Data
  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }
  // Trending movies
  trendingMovieApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
    );
  }
  // Action movies
  actionMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genre=${this.action_movie}`
    );
  }
  // Adventure movies
  adventureMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genre=${this.adventure_movie}`
    );
  }
  // SEARCH MOVIE
  getSearchMovie(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }
  // GET Movie Details
  getMovieDetails(id: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${id}?api_key=${this.apikey}`);
  }
  // Movie Video
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }
  // Movie Cast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }
}
