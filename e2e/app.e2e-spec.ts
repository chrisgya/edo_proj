import { MymasterappPage } from './app.po';

describe('mymasterapp App', function() {
  let page: MymasterappPage;

  beforeEach(() => {
    page = new MymasterappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
