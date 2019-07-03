import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Store } from '../../shared/store';

import { Frame } from '../models/frame.model';
import { FrameService } from '../services/frame.service';
import { FrameState } from './frame-state';

@Injectable({
  providedIn: 'root'
})
export class FrameStore extends Store<FrameState> {

  constructor(private frameService: FrameService) {
    super(new FrameState());
  }

  getAll$ = () => this.frameService.getAll$()
  .pipe(
    tap(() => console.log('Store: GetAll')),
    tap(frames => {
      this.setState({
        ...this.state,
        frames: [...frames]
      });
    })
  )

  get$ = (id: number) => this.frameService.get$(id)
  .pipe(
    tap(() => console.log('Store: Get')),
    tap(frame => {
      this.setState({
        ...this.state,
        frames: this.state.frames.map(f => f.id === frame.id ? { ...f, ...frame } : f)
      });
    })
  )

  create$ = (frame: Frame) => this.frameService.post$(frame)
    .pipe(
      tap(() => console.log('Store: Create')),
      tap(newFrame => {
        this.setState({
          ...this.state,
          frames: [...this.state.frames, newFrame]
        });
      })
    )

  update$ = (frame: Frame) => this.frameService.patch$(frame)
    .pipe(
      tap(() => console.log('Store: Update')),
      tap(updatedFrame => {
        this.setState({
          ...this.state,
          frames: this.state.frames.map(f => f.id === updatedFrame.id ? { ...f, ...updatedFrame } : f)
        });
      })
    )

  delete$ = (frame: Frame) => this.frameService.delete$(frame)
    .pipe(
      tap(() => console.log('Store: Delete')),
      tap(() => {
        this.setState({
          ...this.state,
          frames: this.state.frames.filter(f => f.id !== frame.id)
        });
      })
    )
}
