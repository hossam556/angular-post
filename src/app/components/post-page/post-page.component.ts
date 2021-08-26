import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {PostsService} from '../../posts.service'
import {Post} from '../../Post'
import { faPen , faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  faPen = faPen;
  faTrash =faTrash;

  id: string|null ='';
  post:Post|undefined ;
   
  constructor(private route: ActivatedRoute , private postsService : PostsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.postsService.getPost().subscribe(posts =>{ 
      return ( this.post = posts.find(item => item.id == this.id))
    })

  }

  postexist(){
    console.log(this.post)
  }

}
