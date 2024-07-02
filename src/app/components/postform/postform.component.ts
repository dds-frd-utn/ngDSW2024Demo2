import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-postform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './postform.component.html',
  styleUrl: './postform.component.css'
})
export class PostformComponent implements OnInit {
 
  constructor(private postService: PostService, 
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService) 
      { 
      this.NewPost = new Post();
      console.log(this.NewPost.title);
     }

  public NewPost: Post;
  public NewMode: boolean=true;

  ngOnInit(): void {
    //console.log(this.route.snapshot.params["id"])
      if (this.route.snapshot.params["id"] != undefined) {
        //this.message = '';
        this.NewMode=false;
        this.getElement(this.route.snapshot.params["id"]);
      }
  }
  
  OnSave(): void {
    if (this.NewMode) {
      this.SaveNew();
    } else {
      this.SaveEdit();
    }
  }

    private SaveNew(): void {
      this.NewPost.userId=5; //User Id required
      this.postService.create(this.NewPost)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.toastr.success('Post creado con exito!','Success!',
                {positionClass: 'toast-center-center', timeOut: 2000});
            this.router.navigate(['/posts']);
          },
          error: (e) =>
          {
            console.error(e);
            this.toastr.error('Error creando post. Exception: ' + e.error.message, 'Error!',
              {positionClass: 'toast-center-center', timeOut: 6000}
            ) 
          } 
        });
    }

    private SaveEdit(): void {
      this.NewPost.userId=5; //User Id required
      this.postService.update(this.NewPost.id, this.NewPost)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.toastr.success('Post creado con exito!','Success!',
                {positionClass: 'toast-center-center', timeOut: 2000});
            this.router.navigate(['/posts']);
          },
          error: (e) =>
          {
            console.error(e);
            this.toastr.error('Error creando post. Exception: ' + e.error.message, 'Error!',
              {positionClass: 'toast-center-center', timeOut: 6000}
            ) 
          } 
        });
    }

    getElement(id: string): void {
      this.postService.get(id)
        .subscribe({
          next: (data) => {
            this.NewPost = data;
            console.log(data);
          },
          error: (e) => {
            this.toastr.error('Error caricando post. Exception: ' + e.error.message, 'Error!',
              {positionClass: 'toast-center-center', timeOut: 6000}
            );
            this.router.navigate(['/posts']);
          }
        });
    }

}
