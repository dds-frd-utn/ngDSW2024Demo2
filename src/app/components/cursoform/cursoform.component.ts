import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-cursoform',
  standalone: true,
  imports: [CommonModule, FormsModule, CursoformComponent],
  templateUrl: './cursoform.component.html',
  styleUrl: './cursoform.component.css'
})
export class CursoformComponent {
 
  constructor() 
  { 
      this.NewCurso = new Curso();
      console.log(this.NewCurso.titulo);
  }

  public NewCurso: Curso;
  
  public Val1: boolean=true;

  OnSave() {
    console.log(this.NewCurso);
  }

  OnPrivatoChange() {
    this.Val1=!this.NewCurso.cursoPrivado;
  }
}
