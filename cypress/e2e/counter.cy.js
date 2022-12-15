// - [x] counter의 초기값은 0이다.
// - [ ] - 버튼을 클릭 시 count가 1증가한다.
// - [ ] - 버튼을 클릭 시 count가 1감소한다.
// - [ ] - 버튼을 클릭 시 count가 10이 넘는 경우 더이상 증가하지 못한다. (Max 값이 10)
// - [ ] - 버튼을 클릭 시 count가 0보다 작아지는 경우 감소하지 못한다. (Min 값이 0)
// - [ ] reset 버튼을 클릭 시 counter가 0으로 초기화된다.

describe("example counter app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("counter의 초기값은 0이다.", () => {
    cy.get("#value").invoke("text").should("eq", "0");
  });

  it("버튼을 클릭 시 count가 1증가한다."),
    () => {
      // 기존 값을 가져오고,
      // + 버튼을 클릭한 다음에
      // 변화된 값이 기존값 + 1 인지 체크
      cy.get("#value")
        .invoke("text")
        .then((value) => {
          const preValue = Number(value);
          cy.get(".btn increase-btn").click();
          cy.get("#value")
            .invoke("text")
            .should("eq", String(preValue + 1));
        });
    };
  it("버튼을 클릭 시 count가 1감소한다."),
    () => {
      // + 버튼을 클릭해서 값을 1로 만든다 (Min이 0이기 때문)
      // 기존 값을 가져오고,
      // - 버튼을 클릭한 다음에
      // 변화된 값이 기존값 - 1 인지 체크
      cy.get(".btn increase-btn").click();
      cy.get("#value")
        .invoke("text")
        .then((value) => {
          const preValue = Number(value);
          cy.get(".btn decrease-btn").click();
          cy.get("#value")
            .invoke("text")
            .should("eq", String(preValue + 1));
        });
    };
});
