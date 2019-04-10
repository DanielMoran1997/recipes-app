import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IFood} from '../recipes-list/food.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private ApiURL = 'http://api.yummly.com/v1/api/recipe/';
  private URLAppendix = '?_app_id=69d197c7&_app_key=3c1290be9cec73af81c117b022305399';
  savedRecipes: string[] = [];
  food: IFood[];


  constructor(private http: HttpClient) { }



  ngOnInit() {
    this.savedRecipes = this.savedRecipes;
  }

  saveRecipe(recipe: IFood){
    let index = this.savedRecipes.indexOf(recipe.name);
    if (index == -1) {
      this.savedRecipes.push(recipe.name);

  }
}

}
