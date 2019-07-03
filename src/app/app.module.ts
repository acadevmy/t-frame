import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrameTestComponent } from './frame/components/frame-test/frame-test.component';
import { FrameTestListComponent } from './frame/components/frame-test-list/frame-test-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameTestComponent,
    FrameTestListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
