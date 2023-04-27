describe("test main page", () => {
  it("passes", () => {
    cy.visit("/")
    expect(2).to.eq(4)
    cy.contains("Создать коробку").should("exist")
  })
})
