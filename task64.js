class Uber{
    constructor(name,city,kms,cost){
        this.name=name;
        this.city=city;
        this.kms=kms;
        this.cost=cost;
    }
    getPrice(kms,cost){
        return this.cost*kms;
        
    }
}
//creating different instances in different cities
var car1 = new Uber("samantha","pune",100,5.50)
console.log(car1.getPrice(100));
var car2=new Uber("john","mumbai",500,7.8)
console.log(car2.getPrice(500));
var car3=new Uber("aiman","hyd",500,10)
console.log(car3.getPrice(500));
/*output
550
3900
5000
*/