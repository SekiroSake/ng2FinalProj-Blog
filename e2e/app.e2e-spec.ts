import { Ng2FinalProjPage } from './app.po';

describe('ng2-final-proj App', function() {
  let page: Ng2FinalProjPage;

  beforeEach(() => {
    page = new Ng2FinalProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
