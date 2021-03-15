describe("Initial Layout", () => {
  it("has a header reading Rick & Morty", () => {
    cy.get("h1:first-of-type").should("have.text", "Rick & Morty");
  });
  it("has a header containing two children", () => {
    cy.get("header")
      .should("exist")
      .get("header")
      .children()
      .should("have.length", 2);
  });
  it("has a header containing the Rick And Morty image", () => {
    cy.get("img").should("exist");
    cy.get("img")
      .should("have.attr", "src")
      .should("include", "/assets/rickAndMorty.png");
  });
  it("has a ul for all-characters", () => {
    cy.get("#all-characters").should("exist");
  });
  it("has a ul containing li's for each character on the first page", () => {
    cy.get("#all-characters").children().should("have.length", 20);
    cy.get("#all-characters")
      .children()
      .then((options) => {
        const actual = [...options]
          .map((o) => o.innerText)
          .filter((el) => el !== "");
        const expected = [
          "Rick Sanchez",
          "Morty Smith",
          "Summer Smith",
          "Beth Smith",
          "Jerry Smith",
          "Abadango Cluster Princess",
          "Abradolf Lincler",
          "Adjudicator Rick",
          "Agency Director",
          "Alan Rails",
          "Albert Einstein",
          "Alexander",
          "Alien Googah",
          "Alien Morty",
          "Alien Rick",
          "Amish Cyborg",
          "Annie",
          "Antenna Morty",
          "Antenna Rick",
          "Ants in my Eyes Johnson",
        ];
        expect(actual.sort()).to.deep.eq(expected.sort());
      });
  });
  it("has a no starting main area", () => {
    cy.get("main").should("not.visible");
  });

});
