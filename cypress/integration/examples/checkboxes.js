describe("mouse hover test", () => {
  it("single check box handling", () => {
    cy.visit("http://tutorialsninja.com/demo/index.php?route=product/search");
    cy.get("#description").check().should("be.checked");
    cy.get("#description").uncheck().should("not.be.checked");
  });
  it("handling multiple check boxes", () => {
    cy.visit(
      "http://tutorialsninja.com/demo/index.php?route=product/product&product_id=42"
    );
    cy.get("input[type='checkbox']")
      .check(["9", "10", "11"])
      .should("be.checked");
  });
  it("handling radio button", () => {
    cy.visit(
      "http://tutorialsninja.com/demo/index.php?route=product/product&product_id=42"
    );
    cy.get("input[value='7']").check().should("be.checked");
  });
  it("Handle static drop down", () => {
    cy.visit(
      "http://tutorialsninja.com/demo/index.php?route=product/product&product_id=42"
    );
    cy.get("select").select("3").should("have.value", "3");
  });
});
