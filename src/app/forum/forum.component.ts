import { Component, OnInit } from '@angular/core';
import { IPosts } from './posts.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  errorMessage: string;

  posts: IPosts[] = [
    
  ];

  constructor(private _postsService: PostsService) {
    this.posts;
  }
  ngOnInit() {
    this._postsService.getPosts().subscribe(posts =>{
      this.posts = posts
      this.posts;
    },
      error => this.errorMessage = <any>error); 
  }

}
