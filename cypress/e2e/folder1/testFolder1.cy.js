describe("test main page", () => {
  it("passes", () => {
    cy.visit("/")
    cy.contains("Создать коробку").should("exist")
  })
})