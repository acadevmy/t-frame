import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Frame } from '../../models/frame.model';

@Component({
  selector: 'app-frame-test-list',
  templateUrl: './frame-test-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameTestListComponent implements OnInit {
  @Input() frames: Frame[] = [];

  constructor() { }

  ngOnInit() {
  }
}
