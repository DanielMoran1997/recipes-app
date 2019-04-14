import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFood } from '../recipes-list/food.model';
import { map } from 'rxjs/operators';
import {environment} from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})
export class YummlyApiService {
    constructor(private _http: HttpClient) {}
    //private urlAppendix = `?_app_id=${environment.appID}&_app_key=${environment.apiKey}`;
   // private searchRecipes = 'http://api.yummly.com/v1/api/recipes' + this.urlAppendix;
    private locaulURL = 'http://localhost:3000';

    savedRecipes: string[] = [];

   // getYummlyRecipes(): Observable<IFood> {
  //      return this._http.get<IFood>(this.searchRecipes);
    }

    // attendEvent(recipe: IFood){
        
    
    //     let index = this.savedRecipes.indexOf(recipe.name);
    //     if (index == -1) {
    //       this.savedRecipes.push(recipe.name);
    //     }
    //   }
  


  
  


