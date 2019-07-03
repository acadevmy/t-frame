import { Injectable } from '@angular/core';
import { FrameStore } from '../store/frame.store';
import { Frame } from '../models/frame.model';

@Injectable({
  providedIn: 'root'
})
export class FrameFacadeService {

  constructor(private frameStore: FrameStore) {}

  frames$ = this.frameStore.state$; // NGRX: this.store.select(frameQuery.getAllFrames);

  init() {
    this.frameStore.getAll$().subscribe(); // NGRX: this.store.dispatch(new LoadFrames());
  }

  get(id: number) {
    this.frameStore.get$(id).subscribe((selectedFrame) => console.log(selectedFrame)); // NGRX: this.store.dispatch(new SelectCar(carId));
  }

  create(frame: Frame) {
    this.frameStore.create$(frame).subscribe((createdFrame) => console.log(createdFrame));
  }

  update(frame: Frame) {
    this.frameStore.update$(frame).subscribe((updatedFrame) => console.log(updatedFrame));
  }

  delete(frame: Frame) {
    this.frameStore.delete$(frame).subscribe((deletedFrame) => console.log(deletedFrame));
  }
}
