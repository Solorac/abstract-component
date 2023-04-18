import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ChildAComponent, ChildBComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ChildAComponent, ChildBComponent, HelloComponent],
  bootstrap: [ChildAComponent, ChildBComponent],
})
export class AppModule {}
