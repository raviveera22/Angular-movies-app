import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent {

  movieId:any = ''

  constructor(private _activeroute:ActivatedRoute){

    this._activeroute.params.subscribe((p) => {
      this.movieId=p["id"];
    })

    console.log("Movie Id is"+this.movieId)

  }
}
