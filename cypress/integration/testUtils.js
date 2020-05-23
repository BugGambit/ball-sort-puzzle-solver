// / <reference types="cypress" />

export function getHomeURL() {
  return "http://localhost:3000/";
}

export function goToHomeScreen() {
  cy.visit(getHomeURL());
}

export function getRemoveButton() {
  return cy.contains("REMOVE");
}

export function getBallByIndex(index) {
  return cy.get(`:nth-child(${index + 1}) > .Ball`);
}

export function resetBoard() {
  cy.get(".TestTube").each(() => {
    getRemoveButton().click();
  });
}
