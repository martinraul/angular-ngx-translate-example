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
  selectedItem:any = 'item2'
  translates$:any

  constructor(private translate: TranslateService) { 
    this.translate.addLangs(['en','es', 'br']);
    this.translate.setDefaultLang('en');
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
      this.translate.get("header").subscribe((res) => (console.log(res), this.translates$ = res));
  }

}
