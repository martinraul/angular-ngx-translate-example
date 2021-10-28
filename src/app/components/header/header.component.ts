import { Component, OnInit,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Output() sendLanguage = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }

  setLanguage(e:any){
    let language= e.target.parentNode.id
    console.log(language)
    this.sendLanguage.emit(language);
  }

}
