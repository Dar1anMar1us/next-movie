/// <reference types="cypress" />

describe("Fetch movies", () => {
    it("Using moviedb to fetch movie list", () => {
        cy.visit("/")
        cy.get("ul > :nth-child(2) > a").click().then(() => {
            cy.get(".grid").children().first().click().then(() => {
                cy.get(".rounded-md").should("exist")
            })
        })
    })
})