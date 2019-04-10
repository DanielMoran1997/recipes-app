import {Injectable} from '@angular/core'
import { IPosts } from './forum/posts.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';





@Injectable()
export class PostsService {
    private _postsUrl = 'http://localhost:3000/posts';


    postsCollection: AngularFirestoreCollection<IPosts>;

    posts: Observable<IPosts[]>;

    allPosts: IPosts[];
    errorMessage: string;



    constructor(private _http:HttpClient, private _afs: AngularFirestore) {
        this.postsCollection = _afs.collection<IPosts>("posts");
    }

    getPosts(): Observable <IPosts[]> {
        this.posts = this.postsCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as IPosts;
                console.log("getPosts:data" + JSON.stringify(data));
                const id = a.payload.doc.id;
                console.log("getPosts:id = "+id);
                return {id, ...data};
            }))
        );
        return this.posts;
        
        
    }

    deletePosts(id:string): void {
        this.postsCollection.doc(id).delete()
        .catch(error => {console.log("deletePosts error: " +error); })
        .then(() => console.log('deletePosts: id = '+id))
    }

    addPosts(posts: IPosts): void {
        this.postsCollection.add(posts);
    }

    addAllPosts() {
        this._http.get<IPosts[]>(this._postsUrl).subscribe(
            posts => {
                this.allPosts = posts;
                for (let posts of this.allPosts) {
                    console.log("adding: " + posts.title);
                    this.postsCollection.add(posts);
                }
            },
            error => (this.errorMessage = <any>error)
        )
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}