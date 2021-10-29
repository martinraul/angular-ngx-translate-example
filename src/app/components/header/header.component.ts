import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,EventEmitter,Output  } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Output() sendLanguage = new EventEmitter<string>();
  selectedItem:any
  translates$:any
  constructor(private translate: TranslateService) { 
    this.translate.addLangs(['en','es', 'br']);
    this.translate.setDefaultLang('br');
    this.translate.use('en');
  }
  
  ngOnInit(): void {
    this.setTranslations()
  }

  setLanguage(e:any){
    let language= e.target.parentNode.id
    console.log("language", language)   
    this.sendLanguage.emit(language);
    this.ngOnInit()
  }

  
  setTranslations(){
      // hardcoded example
    //this.user = { firstName: 'Sammy', lastName: 'Shark' };

    // synchronous. Also interpolate the 'firstName' parameter with a value.
   // this.welcome = this.translate.instant('welcomeMessage', { firstName: this.user.firstName });

    // asynchronous - gets translations then completes.
    /*this.translate.get(['languages'])
      .subscribe(translations => {
        //this.usernameLabel = translations['login.username'];
        //this.passwordLabel = translations['login.password'];
        console.log(translations)
      });*/
      this.translate.get("header").subscribe((res) => (console.log(res), this.translates$ = res));

  }

}
