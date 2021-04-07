import { When, Then, Given } from 'cypress-cucumber-preprocessor/steps';

When('я нажимаю кнопку просмотра программы', function () {
  cy.get('.t581')
      .find('a')
      .contains('Посмотреть!')
      .click();
});
