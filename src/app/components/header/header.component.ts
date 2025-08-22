import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent {
  @Output() sendLanguage = new EventEmitter<string>();
  selectedItem: string = 'item2';

  constructor() {}

  setLanguage(e: any) {
    let language = e.target.parentNode.id;
    this.sendLanguage.emit(language);
  }
}
