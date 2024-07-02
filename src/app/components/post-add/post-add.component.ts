import { Component } from '@angular/core';
import { PostformComponent } from "../postform/postform.component";
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-post-add',
    standalone: true,
    templateUrl: './post-add.component.html',
    styleUrl: './post-add.component.css',
    imports: [PostformComponent]
})
export class PostAddComponent {

}
