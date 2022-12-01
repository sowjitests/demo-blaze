describe("Browser control tests", () => {
  it("Browser Back button test", () => {
    cy.visit("www.demoblaze.com/index.html");
    cy.wait(4000);
    cy.get("#cartur").click();
    cy.wait(4000);
    cy.url().should("include", "https://www.demoblaze.com/cart.html");
    //Browser back control
    cy.go("back");
    cy.wait(4000);
    cy.url().should("include", "index.html");
  });
  it("Browser forward button test", () => {
    cy.visit("www.demoblaze.com/index.html");
    cy.wait(4000);
    cy.get("#cartur").click();
    cy.wait(4000);
    cy.url().should("include", "https://www.demoblaze.com/cart.html");
    //Browser back control
    cy.go("back");
    cy.wait(4000);
    cy.url().should("include", "index.html");
    cy.wait(4000);
    //Browser forward control
    cy.go("forward");
    cy.wait(4000);
    cy.url().should("include", "https://www.demoblaze.com/cart.html");
  });
  //Browser vertical scroll to bottom & top
  it("Scroll to the bottom & top of the the page", () => {
    cy.visit("www.demoblaze.com/index.html");
    cy.scrollTo("bottom");
    cy.wait(4000);
    cy.get("p[class='m-0 text-center text-white']").should(
      "have.text",
      "Copyright © Product Store 2017"
    );
    cy.wait(4000);
    cy.scrollTo("top");
    cy.wait(4000);
    cy.get("li[class='nav-item active'] a[class='nav-link']").should(
      "have.text",
      "Home (current)"
    );
  });
});
