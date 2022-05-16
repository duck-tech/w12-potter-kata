export class Basket {
  bookMap!: number[];
  perBookPrice = 8;
  discount = [1, 1, 0.95, 0.9, 0.8, 0.75];

  buy(orders: Array<number>) {
    let price = 0;
    this.bookMap = [0, 0, 0, 0, 0];
    this.addOrdersToBookMap(orders);
    if (this.getBookCount() < 2) {
      price = orders.length * this.perBookPrice;
    } else {
      while (this.checkBookMapLeft()) {
        price +=
          this.perBookPrice *
          this.getBookCount() *
          this.discount[this.getBookCount()];
        this.updateBookMap();
      }
    }
    return price;
  }

  private addOrdersToBookMap(orders: number[]) {
    orders.forEach((bookNumber) => {
      this.bookMap[bookNumber] += 1;
    });
  }

  private getBookCount() {
    let count = 0;
    this.bookMap.forEach((bookNumber) => {
      if (bookNumber > 0) count++;
    });
    if (count === 5 && this.getSecondCount() === 3) {
      count = 4;
    }
    return count;
  }

  private getSecondCount() {
    let bookMapCopy = [];
    bookMapCopy = [...this.bookMap];
    let secondCount = 0;
    bookMapCopy.forEach((bookNumber) => {
      bookNumber = bookNumber - 1;
      if (bookNumber > 0) secondCount++;
    });
    return secondCount;
  }

  private checkBookMapLeft() {
    for (let i = 0; i < this.bookMap.length; i++) {
      if (this.bookMap[i] > 0) {
        return true;
      }
    }
    return false;
  }

  private updateBookMap() {
    let diff = -5;
    if (this.getBookCount() === 4 && this.getSecondCount() === 3) {
      diff = 0;
    }
    for (let i = 0; i < this.bookMap.length; i++) {
      if (this.bookMap[i] > 0) {
        this.bookMap[i] -= 1;
        diff += 1;
      }
      if (diff === 4) {
        break;
      }
    }
    return this.bookMap;
  }
}