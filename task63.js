class person{
    constructor(name,age,sex,job){
      //set the values using this keyword
      this.name=name;
      this.age=age;
      this.sex=sex;
      this.job=job;
    }
    getSpecification(){
      let data=`
      name:${this.name}
      age:${this.age}
      sex:${this.sex}
      job:${this.job}
      `
      return data;
    }
    
  }
  //create an object for class person
  let person1=new person("John",23,"male","doctor");
  let person2=new person("gita",26,"female","engineer");
  let person3=new person("Jane",28,"male","account manager");
  let person4=new person("mary",30,"female","data analyst");
  
  //calling of method should be done with obj ref
 
  console.log(person1);
  console.log(person2);
  console.log(person3);
  console.log(person4);
  /*output
person1
age:23
job:doctor
name: "John"
sex: "male"

person2
age: 26
job: "engineer"
name: "gita"
sex: "female"

person3
age: 28
job: "account manager"
name: "Jane"
sex: "male"

person4
age: 30
job: "data analyst"
name: "mary"
sex: "female"
*/

 