import { HipsterIpsumGeneratorPage } from './app.po';

describe('hipster-ipsum-generator App', () => {
  let page: HipsterIpsumGeneratorPage;

  beforeEach(() => {
    page = new HipsterIpsumGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
