import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(s: string) {
    return browser.get(browser.baseUrl + s) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
