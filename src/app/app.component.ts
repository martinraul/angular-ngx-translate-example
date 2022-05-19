import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';

import { environment } from '../environments/environment';

declare let gtag: (property: string, value: any, configs: any) => {};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngx-translate-example';
  language: string = '';
  dinamicNumber: number = 89;

  constructor(private translate: TranslateService, public router: Router) {
    this.translate.addLangs(['en', 'es', 'br']);
    this.translate.setDefaultLang('br');
    this.translate.use('en');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', environment.googleAnalyticsId, {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }

  getLanguage(language: string) {
    this.translate.use(language);
    console.log(language)
  }
}
