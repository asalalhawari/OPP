//task(1)
class Cars {
  make;
  model;
  
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    console.log(`the car has started` );
  }
}
let myCars = new Cars("Mercedes", "benz");
console.log(myCars.make,  myCars.model); 

myCars.start(); 








//   }
  
  
// }


class ElectricCar extends Cars {
  battery_size
  constructor(make, model,) {
 
    super(make, model);
    this.battery_size = battery_size;
  }
}

let myElectricCar = new ElectricCar("Tesla", "ModelS", "100K"); 



//task(5)
 
class Account {
  #balance 
  constructor(balance) {
  this.#balance = balance;
  } 
  //ايداع+قيمه 
  deposit(amount){
    this.#balance+= amount
  }
  //سحب
  withdraw (amount){ // 
    if(amount > this.#balance){ //الرصيد 
      console.log ("Insufficientbalance" )//  كان المبلغ المطلوب سحبه اكبر من الرصيد الحالي يطيع انه الرصيد غير كافي اذا //

    }      
    else{
      
      this.#balance -= amount //إذا كان المبلغ المطلوب سحبه لا يتجاوز الرصيد ، يتم خصم المبلغ من الرصيد.
      
    }
    
  }
  setbalance(){
    
  }

  getbalance(){
    return this.#balance   //يطبع المبلغ الحالي 
  }
  

}





//task (6)





 



 // // // تعريف الصنف "Car"
// class Car {
   
//     constructor(color, model) {
//       this.color = color;
//       this.model = model;
//     }  

        
        
//     // دالة لعرض معلومات السيارة
//     displayInfo() {
//       console.log(`This ${this.color} car is a ${this.model}.`); 
//     }
//   } 
    
                                                               
// //   إنشاء كائن من الصنف "Car"
//   const myCar = new Car("blue", "Toyota Camry");
  
//   // استدعاء دالة عرض المعلومات
//   myCar.displayInfo(); // سيظهر: "This blue car is a Toyota Camry."

//   // تعريف الصنف "Person"

//   // استدعاء دالة عرض المعلومات
//   person1.displayInfo(); 
//   person2.displayInfo(); 
  

//   }
  
// class family {
//         constructor(name, age) {  
//     this.name = name;
//     this.age = age;
//     }
//     displayInfo(){
//         console.log(`my name is ${this.name} and I am ${this.age} `);
//     }
   

// }
// let asal= new family("asal", 22);
// asal.displayInfo();
// ///////////////////////////// 
// class Person {
//     constructor(name) {
//       this.name = name; // عضو عام
//     }
//     introduce() {
//       console.log(`مرحبًا، اسمي ${this.name}.`);
//     }
//   }
//   const person = new Person('أليس');
//   person.introduce(); // استدعاء طريقة عامة
//   console.log(person.name); // الوصول إلى خاصية عامة
  
// class Person {
//     #name; // عضو خاص
//     constructor(name) {
//       this.#name = name;
//     }
//     #sayHello() {
//       console.log(`مرحبًا، اسمي ${this.#name}.`);
//     }
//     introduce() {
//       this.#sayHello(); // الوصول إلى طريقة خاصة
//     }
//   }
//   const person = new Person('بوب');
//   person.sa
  
// class Person {
//     constructor(name) {
//       this.name = name; // عضو عام
//     }
//     introduce() {
//       console.log(`مرحبًا، اسمي ${this.name}.`);
//     }
//   } 
//   const person = new Person('أليس');
//   person.introduce(); // استدعاء طريقة عامة
//   console.log(person.name); // الوصول إلى خاصية عامة  
// //   class Person {
//     #name; // عضو خاص
//     constructor(name) {
//       this.#name = name;
//     } 
//     #sayHello() {
//       console.log(`مرحبًا، اسمي ${this.#name}.`);
//     }
//     introduce() {
//       this.#sayHello(); // الوصول إلى طريقة خاصة
//     }
//   }
//   const person = new Person('بوب');
//   console.log(person);


// public =class Student {
  
//     private =String =asal;
//     private =int =age;
   
// }




//     // الدالة العامة (Public Method) للوصول إلى اسم الطالب
//     public String getName() {
//         return name;
//     }

//     // الدالة العامة (Public Method) لتعيين اسم الطالب
//     public void setName(String name) {
//         this.name = name;
//     }

//     // الدالة العامة (Public Method) للوصول إلى عمر الطالب
//     public int getAge() {
//         return age;
//     }

//     // الدالة العامة (Public Method) لتعيين عمر الطالب
//     public void setAge(int age) {
//         if(age > 0) {
//             this.age = age;
//         }
//     }
// }

  
  // class Employee{
  //   name;
  //   age ;
  //   ssn;
  //   salary;
  //   Dataofjoin;       بقدر اجيب البروبرتي الباقيين من دون ما اكتبهم 
  //   Department;
  // }
  // وراثه 
  
  // ...
  // // public access modifier
  
  // class Person {
  //     constructor(name) {
  //         this.name = name; // Public member
  //     }
  
  
  //      introduce () {
  //        console.log(`Hello, my name is ${this.name}`);
  //     }
  // }
  
  // const person = new Person('Ali');
  // person.introduce(); 
  // console.log(person.name); 
  
  
  
  
  // }
  
  // const person = new Person('Bob');
  // person.introduce();
  // console.log(person.#name);
  