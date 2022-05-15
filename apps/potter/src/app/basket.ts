export class Basket {
  buy(orders:Array<number>){
    const perBookPrice = 8
    let price = 0;
    
    for(let i = 0; i < orders.length; i++){
      price += perBookPrice
    }
    return -1 
  }
}
