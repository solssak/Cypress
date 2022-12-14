const { default: Item } = require("antd/lib/list/Item");

describe("example counter app", () => {
  beforeEach(() => {
    cy.visit("https://http://127.0.0.1:5500/index.html");
  });

  Item("최초에 카운터 값을 0으로 보여준다", () => {
    cy.get("#value").invoke("text").should("eq", "0");
  });
});
