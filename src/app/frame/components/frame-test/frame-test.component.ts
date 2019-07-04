import { Component, OnInit } from '@angular/core';
import { FrameFacadeService } from '../../services/frame-facade.service';

@Component({
  selector: 'app-frame-test',
  templateUrl: './frame-test.component.html',
  styleUrls: ['./frame-test.component.css']
})
export class FrameTestComponent implements OnInit {
  constructor(public frameFacade: FrameFacadeService) { }

  ngOnInit() {
    this.frameFacade.init();
  }

  addFrame() {
    this.frameFacade.create({model: 'Model Omega',  color: 'blue'});
  }

  updateFrame() {
    this.frameFacade.update({id: 1, model: 'Model Theta'});
  }

  deleteFrame() {
    this.frameFacade.delete({id: 2});
  }

  selectFrame(id: number) {
    this.frameFacade.get(id);
     // N.B. Riceviamo il record originale Model Alpha dato il comportamento non persistente dell'API ;)
  }
}
