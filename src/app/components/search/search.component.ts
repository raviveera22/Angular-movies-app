import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  movieTitle:any = "";

  constructor(private _activeroute: ActivatedRoute){
this._activeroute.params.subscribe((p)=>{
  this.movieTitle = p["movieTitle"]
})
  }

}
