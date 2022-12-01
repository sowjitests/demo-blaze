describe("mouse hover test", () => {
  it("mouse hover", () => {
    cy.visit("http://tutorialsninja.com/demo/");
    cy.get(
      ".dropdown-toggle[href='http://tutorialsninja.com/demo/index.php?route=product/category&path=20']"
    )
      .realHover()
      .then(() => {
        cy.get(
          "a[href='http://tutorialsninja.com/demo/index.php?route=product/category&path=20_27']"
        ).click();
      });

    cy.get("div[id='content'] h2").should("have.text", "Mac");
  });
});
