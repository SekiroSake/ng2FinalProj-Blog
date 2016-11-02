import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule }   from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './user/new-user/new-user.component';

// const routes: Routes = [
//
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    PostComponent,
    NotFoundComponent,
    HomeComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //  RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot([
      {
        path: '', redirectTo: '/home',
        pathMatch: 'full'
      },
      { path: 'home', component: HomeComponent },
      { path: 'user', component: UserComponent },
      { path: 'posts', component: PostComponent },
      { path: 'new', component: NewUserComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
