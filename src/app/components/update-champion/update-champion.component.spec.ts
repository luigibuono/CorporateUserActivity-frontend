import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChampionComponent } from './update-champion.component';

describe('UpdateChampionComponent', () => {
  let component: UpdateChampionComponent;
  let fixture: ComponentFixture<UpdateChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChampionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
