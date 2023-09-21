import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrendingComponent } from './create-trending.component';

describe('CreateTrendingComponent', () => {
  let component: CreateTrendingComponent;
  let fixture: ComponentFixture<CreateTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
