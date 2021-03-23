describe("Styling", () => {
  it("Body has a black background", () => {
    cy.get("body").should("have.css", "background-color", "rgb(0, 0, 0)");
  });
  it("Elements have the correct font", () => {
    cy.get("h1").should("have.css", "font-family", "fantasy");
  });

  it("Header should have correct styling", () => {
    cy.get("header")
      .should("have.css", "background-color", "rgb(0, 128, 0)")
      .should("have.css", "height", "150px");
  });
  it("image has height of 100px", () => {
    cy.get("img").should("have.css", "height", "100px");
  });

});
