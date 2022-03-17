import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';
import { HttpClient } from '@angular/common/http';
import { Irecipes } from 'src/app/models/recipesModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterTerm!: string;
  data : any;
  recipes!: Irecipes[];
 
  constructor(private _recipeService : RecipeServiceService, private http: HttpClient) {
  
   }

  ngOnInit(): void {
  this._recipeService.getRecipePopular().subscribe(res =>{
    this.data = res;
    this.recipes = this.data.recipes.map((recipe: { id: any; image: any; title: any; }) =>  {  return  { id : recipe.id,
                                                                                                image: recipe.image,
                                                                                                title: recipe.title}})
  });
  console.log(this.recipes);

}


}
