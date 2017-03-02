import { AngularMaterialTestsPage } from './app.po';

describe('angular-material-tests App', function() {
  let page: AngularMaterialTestsPage;

  beforeEach(() => {
    page = new AngularMaterialTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
