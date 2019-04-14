import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IFood } from '../recipes-list/food.model';
import { FoodService } from '../food.service';
import * as firebase from 'firebase';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { YummlyApiService} from '../services/yummlyAPI.service';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  food: IFood[];
  filteredFood: IFood[];
  errorMessage: string;
  private ApiURL = 'http://api.yummly.com/v1/api/recipe/';
  private URLAppendix = '?_app_id=69d197c7&_app_key=3c1290be9cec73af81c117b022305399';
  data: any = {};
  recipe: any;
  id: any;
  private URL = 'http://api.yummly.com/v1/api/'


  constructor(private http: HttpClient, private route: ActivatedRoute, private yummlyAPIService: YummlyApiService
    ) {
  }

  // saveRecipe(recipe: IFood){
  //   this.yummlyAPIService.attendEvent(recipe);
  // }


  

  
  ngOnInit() {
    
     this.id = this.route.snapshot.paramMap.get('id');

     this.getRecipeDetails();
        
    }

     getRecipeDetails() {
      this.getRecipeById(this.id).subscribe(recipe => {
        this.recipe = recipe;
      });
     }

     getRecipeById(id): Observable<any> {
       const query = `${this.ApiURL}`+ `${id}` + `${this.URLAppendix}`;
  
      return this.http.get(query).pipe(
        map(data => {
          console.log(data);
         this.data = data
        }));
     }

    //  getRecipes() {
    //   this.getData(name).subscribe(data =>{
    //     console.log(data);
    //     this.data = data;
    //   })
    // }


  }


