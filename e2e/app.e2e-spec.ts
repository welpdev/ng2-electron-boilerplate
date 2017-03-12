import { Ng2ElectronBoilerplatePage } from './app.po';

describe('ng2-electron-boilerplate App', () => {
  let page: Ng2ElectronBoilerplatePage;

  beforeEach(() => {
    page = new Ng2ElectronBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
