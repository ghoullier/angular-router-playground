import { FunnyRouterPage } from './app.po';

describe('funny-router App', () => {
  let page: FunnyRouterPage;

  beforeEach(() => {
    page = new FunnyRouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
