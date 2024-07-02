import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoformComponent } from './cursoform.component';

describe('CursoformComponent', () => {
  let component: CursoformComponent;
  let fixture: ComponentFixture<CursoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
