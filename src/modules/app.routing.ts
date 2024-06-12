import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeatilsComponent } from "src/app/components/deatils/deatils.component";
import { DetailsActorsComponent } from "src/app/components/details-actors/details-actors.component";
import { DetailsMoviesComponent } from "src/app/components/details-movies/details-movies.component";
import { DetailsReviewsComponent } from "src/app/components/details-reviews/details-reviews.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { SearchComponent } from "src/app/components/search/search.component";

const routes: Routes = [
    {path:'', component: HomeComponent},
      {path:'home', component: HomeComponent},
      {path:'details/:id', component: DeatilsComponent},
      {path:'details/actors/:id', component: DetailsActorsComponent},
      {path:'details/movies/:id', component: DetailsMoviesComponent},
      {path:'details/reviews/:id', component: DetailsReviewsComponent},
      {path:'search/:movieTitle',component:SearchComponent}
    //   {path:'feedback',component:FeedbackComponent}
]

@NgModule ({
    imports:[
        RouterModule.forRoot(routes)
    ],

    exports:[RouterModule]
})

export class AppRoutesModule {}