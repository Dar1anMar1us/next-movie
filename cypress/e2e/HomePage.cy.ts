/// <reference types="cypress" />

describe("Basic initial test", () => {
  context("cy.request", () => {
    it("should return a 200", () => {
      cy.request({
        url: "http://127.0.0.1:3000/",
        failOnStatusCode: false,
      })
        .its("status")
        .should("equal", 200)
    })
  })
})