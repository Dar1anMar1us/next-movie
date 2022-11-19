import Header from "../../components/Header"

describe("Home.cy.ts", () => {
  it("playground", () => {
    cy.mount(<Header></Header>)
    cy.get("h1").should("contains.text", "Movies App")
  })
})