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
  user!: { firstName: string; lastName: string; };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;
  language:any

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en','es', 'br']);
    this.translate.setDefaultLang('br');
    this.translate.use('en');
  }

  ngOnInit() {
  this.setTranslations()
  }

  getLanguage(language:any){
    this.translate.use(language);
  }

  setTranslations(){
      // hardcoded example
    this.user = { firstName: 'Sammy', lastName: 'Shark' };

    // synchronous. Also interpolate the 'firstName' parameter with a value.
   // this.welcome = this.translate.instant('welcomeMessage', { firstName: this.user.firstName });

    // asynchronous - gets translations then completes.
    this.translate.get(['login.username', 'login.password'])
      .subscribe(translations => {
        this.usernameLabel = translations['login.username'];
        this.passwordLabel = translations['login.password'];
      });
  }

}
