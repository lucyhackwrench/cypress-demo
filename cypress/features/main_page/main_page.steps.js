import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('я нажимаю кнопку просмотра программы', function () {
  cy.get('.t581')
      .find('a')
      .contains('Посмотреть!')
      .click();
});

When('я на разделе Оставайтесь на связи', function () {
  cy.get('#rec86145677');
})

When('я ввожу значение email {string}', function (email) {
  cy.get('#rec86145677')
      .find('form')
      .find('input[name="Email"]')
      .type(email);
})

When('сабмичу форму', function () {
  cy.get('#rec86145677')
      .find('form')
      .submit();
})

Then('я вижу ошибку валидации email', function () {
  cy.get('#rec86145677')
      .find('form')
      .find('.js-rule-error-email')
      .should('be.visible');
})

Then('раздел Оставайтесь на связи соотвествует макету', function () {
  cy.get('#rec86145677').matchImageSnapshot('subscribe');
})
