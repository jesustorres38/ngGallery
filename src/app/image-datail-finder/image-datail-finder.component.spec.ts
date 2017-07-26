import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDatailFinderComponent } from './image-datail-finder.component';

describe('ImageDatailFinderComponent', () => {
  let component: ImageDatailFinderComponent;
  let fixture: ComponentFixture<ImageDatailFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDatailFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDatailFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
