import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngx-translate-example';
  language: string = '';
  dinamicNumber: number = 89;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es', 'br'])
    this.translate.setDefaultLang('br')
    this.translate.use('en')
  }

  getLanguage(language: string) {
    this.translate.use(language);
  }
}
