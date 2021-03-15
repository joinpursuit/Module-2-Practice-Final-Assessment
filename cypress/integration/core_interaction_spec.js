describe("Core interaction", () => {
  it("Click on a character to view their information", () => {
    cy.get("#all-characters").children().should("have.length", 20);

    cy.get(
      'img[src="https://rickandmortyapi.com/api/character/avatar/11.jpeg"]'
    ).click();
    cy.contains("Albert Einstein").should("exist");
    cy.contains("Dead").should("exist");
    cy.contains("Earth (Replacement Dimension)").should("exist");
        cy.get("#character-info > img")
          .should("have.attr", "src")
          .should(
            "include",
            "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
          );
  });

  it("Enter a comment that displays on the page", () => {
    cy.get('form > input[type="text"]')
      .type("Jerry you are very lame")
      .get('form > input[type="submit"]')
      .click();
    cy.get("#character-comments-ul")
      .children()
      .then((items) => {
        const actual = items[0].innerHTML;
        const titlePattern = /.*(<strong>|<b>)Albert Einstein.+(<\/strong>|<\/b>).*/g;
        const descriptionPattern = /Jerry you are very lame/g;
        expect(actual).to.match(titlePattern);
        expect(actual).to.match(descriptionPattern);
      });
  });
  it("clears the input after form submission", () => {
    cy.get('form > input[type="text"]').should("have.value", "");
  });

  it("changes the character information", () => {
    cy.get(
      'img[src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"]'
    ).click();
    cy.contains("Summer Smith").should("exist");
    cy.contains("Alive").should("exist");
    cy.contains("Dead").should("not.exist");
    cy.contains("Earth (Replacement Dimension)").should("exist");
    cy.get("#character-info img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      );
  });
    it("has character-info section include correct count of children", () => {
      cy.get("#character-info").children().should("have.length", 4);
    });
    it("has main include correct count of children", () => {
      cy.get("main").children().should("have.length", 2);
    });

    it("still shows previous comments", () => {
     cy.get("#character-comments-ul")
       .children()
       .then((items) => {
         const actual = items[0].innerHTML;
         const titlePattern = /.*(<strong>|<b>)Albert Einstein.+(<\/strong>|<\/b>).*/g;
         const descriptionPattern = /Jerry you are very lame/g;
         expect(actual).to.match(titlePattern);
         expect(actual).to.match(descriptionPattern);
       });
    });
});
