import { Then, Given } from 'cypress-cucumber-preprocessor/steps';

const mainPageUrl = "/";
const speakersPageUrl = "/speakers";

Given('я на странице {string}', function(page) {
    const url = page === 'Главная' ? mainPageUrl : '/';
    cy.visit(url);
});

Then('открывается страница {string}', function(page) {
    const url = page === 'Программа' ? speakersPageUrl : '/';
    cy.location('pathname').should('eq', url);
});
