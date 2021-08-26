import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import {Routes , RouterModule} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes =[
  {path:'' ,component: PostsComponent},
  {path:'post/:id' ,component: PostPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule,
    RouterModule.forRoot(appRoutes ,{enableTracing:true}),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
