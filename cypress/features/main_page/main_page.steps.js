import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import MainPage from '../../support/page_objects/main_page';

const mainPage = new MainPage();

When('я нажимаю кнопку просмотра программы', function () {
  cy.get('.t581')
      .find('a')
      .contains('Посмотреть!')
      .click();
});

When('я на разделе Оставайтесь на связи', function () {
  mainPage.getSubscribeSection();
})

When('я ввожу значение email {string}', function (email) {
  mainPage.getSubscribeFormEmailInput().type(email);
})

When('сабмичу форму', function () {
  mainPage.getSubscribeForm().submit();
})

Then('я вижу ошибку валидации email', function () {
  mainPage.getSubscribeFormEmailError().should('be.visible');
})

Then('раздел Оставайтесь на связи соотвествует макету', function () {
  mainPage.getSubscribeSection().matchImageSnapshot('subscribe');
})
