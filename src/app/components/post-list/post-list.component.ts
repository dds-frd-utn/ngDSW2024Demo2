import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, Reactions } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { PostDetailComponent } from "../post-detail/post-detail.component";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-post-list',
    standalone: true,
    templateUrl: './post-list.component.html',
    styleUrl: './post-list.component.css',
    imports: [CommonModule, PostDetailComponent]
})
export class PostListComponent implements OnInit {

  posts?:Post[];
  currentElement: Post = new Post();

  constructor(private postService: PostService,
    private toastr: ToastrService) { }
  ngOnInit(): void {
    this.retrievePost();
  }
  retrievePost(): void {
    this.postService.getAll()
      .subscribe({
        next: (data) => {
          this.posts = data.posts;
          if (this.posts.length>0) this.currentElement = this.posts[0];
          //console.log(this.posts[0].reactions?.likes);
          //console.log(data);
        },
        error: (e) => {
          this.toastr.error('Error obteniendo post. Exception: ' + e.error.message, 'Error!',
            {positionClass: 'toast-center-center', timeOut: 6000});
        }
      });
  }

  private tmr: any;

  OnKeyUp(search: any) {
    this.retrieveFiltered(search);
  }

  retrieveFiltered(search: any): void {
    this.postService.findByTitle(search)
      .subscribe({
        next: (data) => {
          this.posts = data.posts;
          if (this.posts.length>0) {
            this.currentElement = this.posts[0];
          } else {
            this.currentElement = new Post();
          }
        },
        error: (e) => {
          console.error(e);
          this.toastr.error('Error obteniendo post. Exception: ' + e.error.message, 'Error!',
            {positionClass: 'toast-center-center', timeOut: 6000});
        }
      });
  }
  

  setActiveElement(element: Post): void {
    this.currentElement = element;
  }
}
