import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamselectComponent } from './teamselect.component';

describe('TeamselectComponent', () => {
  let component: TeamselectComponent;
  let fixture: ComponentFixture<TeamselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamselectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
