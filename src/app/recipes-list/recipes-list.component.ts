import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IFood } from './food.model';
import { FoodService } from '../food.service';
import * as firebase from 'firebase';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { YummlyApiService} from '../services/yummlyAPI.service';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import * as cors from 'cors';
import { ActivatedRoute, Router, Params } from '@angular/router';



const corsPassThrough = cors({origin: true})


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin',
    'Access-Control-Allow-Origin': 'http://api.yummly.com/v1/api/recipe'
  })
};

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class RecipesListComponent implements OnInit {
  searchRecipeForm: FormGroup;
  food: IFood[];
  errorMessage: string;
  private ApiURL = 'http://api.yummly.com/v1/api/recipes?';
  private URLAppendix = '_app_id=69d197c7&_app_key=3c1290be9cec73af81c117b022305399';
  private id = this.id;
  private url = 'http://api.yummly.com/v1/api/recipe';
  data: any = {};
  recipes: any;
  private q = this.q;
  body: string;
  searchTerm: any;
  search: any;

  


  loading = false;
  success = false;
  @Output() dataEvent = new EventEmitter();





  constructor(private http: HttpClient, private fb: FormBuilder, private route: ActivatedRoute
    ) {
    this.getData(name);
    this.getRecipes();
    this.searchRecipes(name);
  }

  getData(id: string) {
    return this.http.get(this.ApiURL + `${id}` + this.URLAppendix)
  }

  getRecipes() {
    this.getData(name).subscribe(data =>{
      console.log(data);
      this.data = data;
    })
  }

 

  searchRecipes(searchTerm): Observable<any> {
      const query = `${this.ApiURL}` + `${this.URLAppendix}` + `&q=${searchTerm}`;
    
      return this.http.get(query).pipe(
        map(data => {
          console.log(data);
         this.data = data
        }));


  }

  

  getSearchResults() {
    this.searchRecipes(this.searchTerm).subscribe(search =>{
      console.log(this.search);
      this.search = search;
    })
  }



 

  

 

  
  ngOnInit() {


    this.id = this.route.snapshot.paramMap.get('id');
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');



  }


  }



