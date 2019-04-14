import { Component, OnInit } from '@angular/core';
import { IPosts } from './posts.model';
import { PostsService } from '../posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  errorMessage: string;
  title: string;
  message: string;
  pressed


  posts: IPosts[] = [
    
  ];

  constructor(private _postsService: PostsService, private router: Router) {
    this.posts;
  }
  ngOnInit() {
    this._postsService.getPosts().subscribe(posts =>{
      this.posts = posts
      this.posts;
    },
      error => this.errorMessage = <any>error); 
  }

  addPost(): void {
    let posts:IPosts = {
      title:this.title,
      message:this.message
    };
    this._postsService.addPosts(posts);

    this.pressed = 'disabled';

}
}
