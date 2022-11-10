const product = require("./product");

describe("Product Suit Tests", () => {
  it("should be sum correct", () => {
    // Arrange (Preparar o teste)
    const baseTaxMock = 19.9;
    const complementTax = 30;
    const resultExpected = 49.9;

    // Act (Rodar o teste)
    const resultReceived = product.calcTaxs(baseTaxMock, complementTax);

    // Assert ( Verificar as asserções)

    expect(resultReceived).toBe(resultExpected);
  });

  it("should be minimum tax", () => {
    // Arrange (Preparar o teste)
    const baseTaxMock = 19.9;
    const complementTax = -20;
    const resultExpected = 0;

    // Act (Rodar o teste)
    const resultReceived = product.calcTaxs(baseTaxMock, complementTax);

    // Assert ( Verificar as asserções)
    expect(resultReceived).toBeGreaterThan(resultExpected);
  });
});
