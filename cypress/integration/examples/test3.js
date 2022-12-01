describe("Browser control tests", () => {
  it("Handling new tab/window", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("div[class='header_block'] a[title='Facebook']")
      .invoke("removeAttr", "target")
      .click();
  });
});
