import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  constructor(public translate: TranslateService) {
    var lang = localStorage.getItem('lang');
    this.setLanguage(lang||'en');
  }

  public setLanguage(lang:string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  // public translateInstance(text:string):string
  // {
  //   const transText = this.translate.instant(text);
  //   return transText;
  // }

  public translateInstance(text: string, variables?: { [key: string]: string }): string {
    if (variables) {
      return this.translate.instant(text, variables);
    }
    return this.translate.instant(text);
  }

}
