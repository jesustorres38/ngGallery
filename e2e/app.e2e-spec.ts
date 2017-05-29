import { NgZwitterPage } from './app.po';

describe('ng-zwitter App', () => {
  let page: NgZwitterPage;

  beforeEach(() => {
    page = new NgZwitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
