import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  show = false;
  items: GalleryItem[];
  isLoggedIn: boolean;


  constructor(private router: Router,private auth: AuthService) {

  }


  imageData = [
    {
      srcUrl: 'assets/img1.jpg',
      previewUrl: 'assets/img1.jpg'
    },
    {
      srcUrl: 'assets/img2.jpg',
      previewUrl: 'assets/img2.jpg',
    },
    {
      srcUrl: 'assets/img3.jpg',
      previewUrl: 'assets/img3.jpg',
    },
    {
      srcUrl: 'assets/img4.jpg',
      previewUrl: 'assets/img4.jpg',
    }
  ];

  recipesList() {
    this.router.navigate(['/recipe']);
  }
  userLoggedIn(): boolean {
    this.isLoggedIn = this.auth.isLoggedIn();
    return this.isLoggedIn
  }

  ngOnInit() {
    this.items = this.imageData.map(item => {
      return new ImageItem({src: item.srcUrl, thumb: item.previewUrl});
    });
    this.isLoggedIn = this.auth.isLoggedIn();

  }

  onError(e) {
    console.log('Test error', e);
  }

}