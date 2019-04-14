import { Component, OnInit } from '@angular/core';
import { IPosts} from '../forum/posts.model';
import { Observable } from 'rxjs';
import { YummlyApiService} from '../services/yummlyAPI.service';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.component.html',
  styleUrls: ['./forum-posts.component.css']
})
export class ForumPostsComponent implements OnInit {
  posts: IPosts[];
  errorMessage: string;
  data: any = {};
  post: any;
  title: any;
  private URL = 'http://api.yummly.com/v1/api/';
  private forumUrl = 'forum/';

  constructor(private http: HttpClient, private route: ActivatedRoute, private yummlyAPIService: YummlyApiService) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');

    this.getPostDetails();

  }

  getPostDetails() {
    this.getPostByTitle(this.title).subscribe(post => {
      this.post = post;
    });
   }

   getPostByTitle(title): Observable<any> {
     const query = `${this.forumUrl}` + `${title}`;

    return this.http.get(query).pipe(
      map(data => {
        console.log(data);
       this.data = data
      }));
   }

}
