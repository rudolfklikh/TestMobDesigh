import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagerComponent } from './home-pager.component';

describe('HomePagerComponent', () => {
  let component: HomePagerComponent;
  let fixture: ComponentFixture<HomePagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
