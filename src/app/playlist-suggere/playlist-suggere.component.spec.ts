import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSuggereComponent } from './playlist-suggere.component';

describe('PlaylistSuggereComponent', () => {
  let component: PlaylistSuggereComponent;
  let fixture: ComponentFixture<PlaylistSuggereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistSuggereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistSuggereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
