// / <reference types="cypress" />

import { getHomeURL } from "./testUtils";

context("Home screen", () => {
  beforeEach(() => {
    cy.visit(getHomeURL());
  });

  it("take screenshot of home screen", () => {
    cy.screenshot("home_screen");
  });
});
