export class Basket {
  buy(orders: Array<number>) {
    const perBookPrice = 8;
    const discount = [1, 1, 0.95, 0.9, 0.8, 0.75];
    const bookMap = [0, 0, 0, 0, 0];
    let price = 0;
    let count = 0;

    for (let i = 0; i < orders.length; i++) {
      bookMap[orders[i]] += 1;
    }

    for (let i = 0; i < bookMap.length; i++) {
      if (bookMap[i] > 0) {
        count++;
      }
    }

    if (count === 1 || 0) {
      for (let i = 0; i < orders.length; i++) {
        price += perBookPrice;
      }
    } else {
        price = perBookPrice * count * discount[count];
      }
      return price;
    }
  }