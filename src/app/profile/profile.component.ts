import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IFood} from '../recipes-list/food.model';
import { ActivatedRoute} from '@angular/router';
import { PostsService } from '../posts.service';
import { IPosts} from '../forum/posts.model';

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
  data: any;
  private id = this.id;
  posts: IPosts[] = [
    
  ];
  errorMessage: string;
  



  constructor(private http: HttpClient, private route: ActivatedRoute, private _postsService: PostsService) {
    this.getData(name);
    this.getRecipes();
   }



  ngOnInit() {
    this._postsService.getPosts().subscribe(posts =>{
      this.posts = posts
      this.posts;
    },
      error => this.errorMessage = <any>error); 

    

  }

  saveRecipe(recipe: IFood){
    let index = this.savedRecipes.indexOf(recipe.name);
    if (index == -1) {
      this.savedRecipes.push(recipe.name);

  }
}

getData(id: string) {
  return this.http.get(this.ApiURL + this.URLAppendix)
}

getRecipes() {
  this.getData(name).subscribe(data =>{
    console.log(data);
    this.data = data;
  })
}

}
