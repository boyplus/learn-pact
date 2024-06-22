class Order {
  constructor(id, items) {
    this.id = id;
    this.items = items;
  }
  total() {
    return this.items.reduce((acc, item) => {
      acc += item.quantity * item.value;
      return acc;
    });
  }

  toString() {
    return `Order ${this.id}, Total: ${this.total()}`;
  }
}

module.exports = {
  Order
};