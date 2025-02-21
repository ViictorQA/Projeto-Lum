/// <reference types="cypress" />

import Lum from "../Lum/index";

describe("Acessar o site do Tenda", () => {
  it("comprar produtos", () => {
    cy.viewport("macbook-16");

    Lum.LoginSucesso();
    Lum.CriarUsuario();
    Lum.LoginFalha();
  });
});
