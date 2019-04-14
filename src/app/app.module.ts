import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatDrawer, MatIconModule, MatListModule, MatCardModule, MatInputModule, MatToolbarModule, MatExpansionModule, MatButtonModule, MatListSubheaderCssMatStyler, MatProgressSpinnerModule, MatMenuModule, MatSelect, MatSelectModule, MatFormFieldModule, MatCheckboxModule, MatSidenavModule, MatTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule, DropdownModule } from 'angular-bootstrap-md';
import {environment} from '../environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { HttpModule } from '@angular/http';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { IFood } from './recipes-list/food.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard} from './auth.guard';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ForumComponent } from './forum/forum.component';
import { PostsService } from './posts.service';
import { ForumPostsComponent } from './forum-posts/forum-posts.component';

const routes: Routes = [
  {path: 'login', component: LoginRegistrationComponent},
  {path: 'recipe', component: RecipesListComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'recipe/:id', component: RecipeDetailsComponent},
  {path: 'forum/:title', component: ForumPostsComponent},
  {path: 'profile', component: ProfileComponent,canActivate: [AuthGuard]},
  {path: 'forum', component: ForumComponent,canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login', canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard]}



]

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    RecipesListComponent,
    NavbarComponent,
    HomeComponent,
    RecipeDetailsComponent,
    ProfileComponent,
    ForumComponent,
    ForumPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    DropdownModule,
    FlexLayoutModule,
    HttpModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    BrowserAnimationsModule,
    AngularFireAuthModule


  ],
  providers: [AppComponent, IFood, AuthService, AuthGuard, NotificationService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
