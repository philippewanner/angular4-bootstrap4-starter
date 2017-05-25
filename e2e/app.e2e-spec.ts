import { Angular4Bootstrap4StarterPage } from './app.po';

describe('angular4-bootstrap4-starter App', () => {
  let page: Angular4Bootstrap4StarterPage;

  beforeEach(() => {
    page = new Angular4Bootstrap4StarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
