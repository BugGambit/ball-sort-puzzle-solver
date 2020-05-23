// / <reference types="cypress" />

import { goToHomeScreen, resetBoard } from "./testUtils";

context("Solve simple game", () => {
  beforeEach(() => {
    goToHomeScreen();
    resetBoard();
  });

  // it("should be able to configure a simple game", () => {
  //   const balls = getAllColorBalls();
  //   console.log(balls[0]);
  // });
});
