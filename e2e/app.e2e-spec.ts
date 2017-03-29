import { HipsterIpsumGeneratorPage } from './app.po';
import { browser, element, by } from 'protractor';


describe('hipster-ipsum-generator App', () => {
  let page: HipsterIpsumGeneratorPage;

  beforeEach(() => {
    page = new HipsterIpsumGeneratorPage();
  });

  it('should have an h1 element on the front page', () => {
    browser.get('/');
    let heading = element(by.css('h1'));  
    expect(heading).toBeTruthy();
  });
});
