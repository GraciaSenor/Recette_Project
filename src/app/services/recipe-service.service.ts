import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Irecipes } from '../models/recipesModel';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  headers = new HttpHeaders().set('Content-Type', 'Application/json').set('Accept', 'Application.json');
 httpOptions ={
   headers: this.headers
 }
 
  constructor(private http: HttpClient) { 

  }

  getRecipePopular():Observable<Irecipes[]>{
     return this.http.get<Irecipes[]>('https://api.spoonacular.com/recipes/random?apiKey=b2d3d7752eb44d3d8d970bb6abf60aad&number=5');
}


}
