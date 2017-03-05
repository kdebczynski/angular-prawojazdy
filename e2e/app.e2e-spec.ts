import { TestRcPage } from './app.po';

describe('test-rc App', () => {
  let page: TestRcPage;

  beforeEach(() => {
    page = new TestRcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
