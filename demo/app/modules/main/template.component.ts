import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  template: ` <gt-render [data]="route.snapshot.data.data"></gt-render>`,
})
export class TemplateComponent {
  constructor(public route: ActivatedRoute) {}
}
