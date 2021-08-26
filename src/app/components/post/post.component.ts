import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Post } from '../../Post'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() public post!:Post
  @Output() onPushPost:EventEmitter<Post> = new EventEmitter() ; 


  constructor() {
  }

  ngOnInit(): void {
  }

  onPush(post:Post){
    this.onPushPost.emit(post)
  }

}
