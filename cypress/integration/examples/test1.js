//assertion - Mocha
import Home from "../pageObjects/home";
const { generateUsername } = require("unique-username-generator");
const generator = require("generate-password");
//Global variables
const url = "https://www.demoblaze.com/";
let userName = generateUsername(); //Assigning a random username to userName variable
let password = generator.generate({
  length: 5,
  numbers: true,
});

describe("My first Test", function () {
  it("Navigate to Login Page of DemoBlaze site", function () {
    cy.visit(url); //Navigation to the webpage demoblaze using the URL
    const homePage = new Home();

    homePage.loginInOption().should("be.visible").click(); //Is to identify LOGIN option on the page. Confirm the elements exists and then click the option
    cy.wait(6000);
    homePage.userName().should("be.visible").type("test");
    homePage.password().should("be.visible").type("test");
    cy.wait(6000); //Wait for the time specified to run the next step
    homePage.loginInButton().click();
    cy.wait(3000);
    cy.get("#nameofuser").should("have.text", "Welcome test");
  });

  it("Test to sign up a new user", () => {
    cy.visit(url);
    cy.get("#signin2").click();
    cy.wait(6000);
    cy.get("#sign-username").type(userName);
    cy.wait(6000);
    cy.get("#sign-password").type(password);
    cy.wait(6000);
    cy.get("button[onclick='register()']").click();
    cy.wait(6000);
    cy.on("window:alert", function (myalertword) {
      //Handle Browser window alerts
      expect(myalertword).eql("Sign up successful.");
    });
    cy.reload();
  });

  it("Test to add product to a cart using a valid user with ZERO items added to cart previously", () => {
    cy.visit(url);

    cy.get("#login2").click();
    cy.wait(6000);
    cy.get("#loginusername").type(userName);
    cy.wait(6000);
    cy.get("#loginpassword").type(password);
    cy.wait(6000);
    cy.get("button[onclick='logIn()']").click();
    cy.wait(6000);
    cy.get(
      'a[href="prod.html?idp_=1"] img[src = "imgs/galaxy_s6.jpg"]'
    ).click();
    cy.wait(6000);
    cy.get("h2[class='name']").should("have.text", "Samsung galaxy s6");
    cy.wait(6000);
    cy.get(".btn.btn-success.btn-lg").click();
    cy.wait(6000);
    cy.on("window:alert", function (AlertText) {
      expect(AlertText).eql("Product added.");
    });
    cy.reload(); //To reload or refresh the page
    cy.wait(6000);
    cy.get("#cartur").click();
    cy.wait(6000);
    cy.get("td:nth-child(2)").should("have.text", "Samsung galaxy s6"); //Assert the item in the cart
  });
});
