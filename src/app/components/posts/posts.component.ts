import { Component, OnInit } from '@angular/core';
import {Post} from '../../Post'
import {PostsService} from '../../posts.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [
 
  ] ;

  public text : string ="";

  constructor(private postsService : PostsService) { }

  ngOnInit(): void {
    this.postsService.getPost().subscribe(posts => this.posts = posts);
  }

  pushPost(post:Post){
       console.log('post pushed!')
  }

  onChange(text : any) :void
  {
    this.text = text;


    let newPosts = [...this.posts] ;

    newPosts = this.posts.filter(item => item.title.toLowerCase().includes(this.text.toLowerCase()));
    this.posts = newPosts ;

    if(this.text === ""){
      this.postsService.getPost().subscribe(posts => this.posts = posts);
    }
  }

}
