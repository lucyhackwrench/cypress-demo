class MainPage {
    subscribeSection = '#rec86145677';
    subscribeForm = 'form';
    subscribeFormEmailInput = 'input[name="Email"]';
    subscribeFormEmailError = '.js-rule-error-email';

    getSubscribeSection() {
        return cy.get(this.subscribeSection);
    }

    getSubscribeForm() {
        return cy.get(this.subscribeSection)
            .find(this.subscribeForm);
    }

    getSubscribeFormEmailInput() {
        return cy.get(this.subscribeSection)
            .find(this.subscribeForm)
            .find(this.subscribeFormEmailInput);
    }

    getSubscribeFormEmailError() {
        return cy.get(this.subscribeSection)
            .find(this.subscribeForm)
            .find(this.subscribeFormEmailError);
    }
}

export default MainPage;
