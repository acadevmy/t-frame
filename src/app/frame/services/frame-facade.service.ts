import { Injectable } from '@angular/core';
import { FrameStore } from '../store/frame.store';
import { Frame } from '../models/frame.model';
import { map } from 'rxjs/operators';
import { Store } from 'src/app/shared/store';
import { FrameState } from '../store/frame-state';

@Injectable({
  providedIn: 'root'
})
export class FrameFacadeService {

  constructor(private frameStore: FrameStore) {}

  frames$ = this.frameStore.state$.pipe(map((state: FrameState) => state.frames)); // NGRX: this.store.select(frameQuery.getAllFrames);
  selectedFrame$ = this.frameStore.state$.pipe(map((state: FrameState) => state.selectedFrame));

  init() {
    this.frameStore.getAll$().subscribe(); // NGRX: this.store.dispatch(new LoadFrames());
  }

  get(id: number) {
    return this.frameStore.get$(id).subscribe(); // NGRX: this.store.dispatch(new SelectCar(carId));
  }

  create(frame: Frame) {
    return this.frameStore.create$(frame).subscribe();
  }

  update(frame: Frame) {
    return this.frameStore.update$(frame).subscribe();
  }

  delete(frame: Frame) {
    return this.frameStore.delete$(frame).subscribe();
  }
}
