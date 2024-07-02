import { Component, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

  @Input() viewMode = false;
  @Input() currentElement: Post = new Post();
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }


  OnDelete() {
   if (confirm('Seguro de querer eliminar?')) {
      this.postService.delete(this.currentElement.id)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.toastr.success('Post eliminado con exito!','Eliminado!',
                {positionClass: 'toast-center-center', timeOut: 2000});
            this.router.navigate(['/']);
          },
          error: (e) =>
          {
            console.error(e);
            this.toastr.error('Error eliminando post. Exception: ' + e.error.message, 'Error!',
              {positionClass: 'toast-center-center', timeOut: 6000}
            ) 
          } 
        });
    }
  }

}
