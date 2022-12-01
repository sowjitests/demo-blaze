class Home {
  loginInOption() {
    return cy.get("#login2");
  }

  userName() {
    return cy.get("#loginusername");
  }

  password() {
    return cy.get("#loginpassword");
  }

  loginInButton() {
    return cy.get('button[onclick="logIn()"]');
  }
}

export default Home;
