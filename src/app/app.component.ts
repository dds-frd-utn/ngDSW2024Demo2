import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursoformComponent } from './components/cursoform/cursoform.component';
import { PostListComponent } from "./components/post-list/post-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, CursoformComponent, PostListComponent, RouterLink]
})
export class AppComponent {

  data = {
    titulo: 'Demo DSW',
    description: 'Demo Desarrollo de Software',
    List_caption: 'Posts',
    Add_caption: 'Agregar',
    Search_caption: 'Buscar'
  }
  /*

  OnKeyUp(NewTitulo: string) {
    this.data.titulo = NewTitulo;
  }
  OnClick() {
    this.data.titulo = "Modificado"
  }*/
  
}
