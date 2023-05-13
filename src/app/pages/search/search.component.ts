import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {}

  searchResult: any = Array;

  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  submitForm() {
    this.searchResult = this.service
      .getSearchMovie(this.searchForm.value)
      .subscribe((result) => {
        this.searchResult = result.results;
      });
  }
}
