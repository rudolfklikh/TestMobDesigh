import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagerHeaderComponent } from './home-pager-header.component';

describe('HomePagerHeaderComponent', () => {
  let component: HomePagerHeaderComponent;
  let fixture: ComponentFixture<HomePagerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePagerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePagerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
