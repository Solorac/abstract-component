import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  ChildAComponent,
  ChildBComponent,
  ChildCComponent,
} from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    ChildAComponent,
    ChildBComponent,
    ChildCComponent,
    HelloComponent,
  ],
  bootstrap: [ChildAComponent, ChildBComponent, ChildCComponent],
})
export class AppModule {}
