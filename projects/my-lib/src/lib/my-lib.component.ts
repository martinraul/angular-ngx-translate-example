import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'lib-my-lib',
  template: `
  <span class="tag is-white ">
  <i src="assets/img/github-brands.svg"></i>
  <a class="has-text-success-dark has-text-weight-bold" target="_blank"
      href="https://github.com/ngx-translate/core">https://github.com/ngx-translate/core</a>
</span>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}