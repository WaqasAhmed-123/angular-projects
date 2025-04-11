import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

// need to install following library
//npm install @ngx-translate/core @ngx-translate/http-loader

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedLanguage:string;

  tableHeader = [
    "TABLES.USER_HEADER.NAME","TABLES.USER_HEADER.EMAIL","TABLES.USER_HEADER.CONTACT"
  ]

  constructor(private languageService: LanguageService) {
    this.selectedLanguage = localStorage.getItem('lang')||'en';
  }

  switchLanguage(event: any) {
    this.selectedLanguage = event.target.value;
    this.languageService.setLanguage(this.selectedLanguage);
  }

  showAlert()
  {
    var translate = this.languageService.translateInstance('ALERT_MSG');
    alert(translate);
  }

  showDynamicAlert()
  {
    var translate = this.languageService.translateInstance('DYNAMIN_MSG', { var: 'Developer', var2: '(2nd variable)' });
    alert(translate);
  }
}
