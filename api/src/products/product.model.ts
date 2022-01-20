/* OLD FASHION LONG
export class Product {
  id:string;
  title:string;
  description:string;
  price:number;

  constructor(id: string, title: string, desc: string, price: number){
    this.id = id;
    this.title = title;
    this.description = desc;
    this.price = price;
  };
}
*/

// public/private is accessor that allows shortened access, typescript will automically store value with proprtites.
// SHORT/NEW

export class Product {
  constructor(
    public id: string, 
    public title: string, 
    public description: string, 
    public price: number
  ){}
}

// STOPPED 32:25