import { Component, OnInit } from '@angular/core';

export abstract class BaseComponent implements OnInit {
  name = 'DEFAULT';
  constructor() {}
  ngOnInit() {
    console.log('PARENT');
  }

  testFunction(funct: () => void) {
    console.log(this.name);
    funct();
  }
}

@Component({
  selector: 'my-appAAA',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class ChildAComponent extends BaseComponent {
  name = 'AngularAAA';

  ngOnInit() {
    console.log('CHILDAAA');
    this.testFunction(this.childFunctionAAA);
  }

  childFunctionAAA() {
    console.log('Child1AAA');
  }
}

@Component({
  selector: 'my-appBBB',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class ChildBComponent extends BaseComponent {
  ngOnInit() {
    console.log('CHILDBBB');
    this.testFunction(this.childFunctionBBB);
  }

  childFunctionBBB() {
    console.log('ChildBBB');
  }
}
