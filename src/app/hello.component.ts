declare var goog;

import { Component, Input } from '@angular/core';
require("google-closure-library");
goog.require('goog.events');

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
