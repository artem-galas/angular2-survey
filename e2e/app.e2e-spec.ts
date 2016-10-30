import { Angular2SurveyPage } from './app.po';

describe('angular2-survey App', function() {
  let page: Angular2SurveyPage;

  beforeEach(() => {
    page = new Angular2SurveyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
