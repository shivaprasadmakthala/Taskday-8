//1.  The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//    title, which is a String representing the title of the movie
//    studio, which is a String representing the studio that made the movie
//    rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//    a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//    b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//    c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//    d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

// class Movie {
//     constructor(title, studio, rating){
//         this.title = title;
//         this.studio = studio;
//         // this.rating = rating;  //a
//         if(rating == null){
//             this.rating = "PG";
//         } else{
//             this.rating = rating; // b
//         }
//     }
    
//     getPG(array){
//         var result = array.filter((ele) => ele.rating =="PG");  //c
//         return result;
//     }
// }

// let movieDetails = new Movie();
// let movie1 = new Movie("Jai Bhim", "2D Entertainment", "PG12");
// let movie2 = new Movie("Doctor", "KJR Studios");
// let movie3 = new Movie("Bahubali", "Arka Media", "R");
// let movie4 = new Movie("RRR", "DVV Entertainment");

// const moviearr = [movie1, movie2, movie3, movie4];
// // console.log(moviearr);

// // console.log(movie2);

// let movie5 = new Movie("Casino Royale", "Eon Productions", "PG13");
// console.log(movie5);


// 2. Circle - class
//    Convert the UML diagram to Typescript class. - use number for double

// class Circle{
//     constructor(...args){

//         if(args.length ==0){

//         } else if(args.length == 1){
//             this.radius = args[0];
//         } else if(args.length == 2){
//             this.radius = args[0];
//             this.color = args[1];
//         }
//     }

//     getRadius(){
//         return this.radius;
//     }
//     getColor(){
//         return this.color;
//     }
//     setRadius(num){
//         this.radius = num;
//     }
//     setColor(col){
//         this.color = col;
//     }
//     getArea(){
//         return (Math.pow(this.radius, 2)*(Math.PI)).toFixed(2);
//     }
//     getCircumference(){
//         return (2*this.radius*(Math.PI)).toFixed(2);
//     }
// }

// let circle = new Circle(1, "Red");

// console.log(circle.getColor());
// console.log(circle.getArea());
// console.log(circle.getCircumference());


// 3.Write a “person” class to hold all the details.

// class Person{
//     static CompanyName = "GUVI";
//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
        
//     }
//     getData(){
//         let personData = `
//         Name:${this.name}
//         Age:${this.age}
//         Address:${this.address}
//         `;
//         console.log(personData);
//     }
//     static getCompanyName(){
//         console.log(Person.CompanyName);
//     }
// }

// class Employee extends Person{
//     static CompanyNew = "ZEN";
//     constructor(name, age, address, salary, designation ){
//         super(name, age, address);
//         this.salary = salary;
//         this.designation = designation;
//     }
//     getData(){
//         let employeeData = `
//         Name:${this.name}
//         Age:${this.age}
//         Address:${this.address}
//         Salary:${this.salary}
//         Designation:${this.designation}
//         `;
//         console.log(employeeData);
//     }
//     static getCompanyName(){
//         console.log(Employee.CompanyNew);
//     }
// }

// let employee1 = new Employee("Steve", 33, "Hyderabad", 500000, "Manager");
// employee1.getData();
// Employee.getCompanyName();

// let person1 = new Person("Rajkumar", 25, "Bangalore");
// person1.getData();
// Person.getCompanyName();

// 4. write a class to calculate the uber price.

class Uber{

    constructor(km){
        this.km = km;
        this.price = this.km*3;
    }

    getPrice(){
        return `Charges for the Ride is ${this.price}`;
    }
    applyDiscount(){
        var Discount = (25/this.price)*100;
        var DiscountedPrice = this.price - Discount;
        return `Dicounted charges for the ride is ${DiscountedPrice}`;
    }
}

let Ride = new Uber();
let Ride1 = new Uber(30);
console.log(Ride1.getPrice());
console.log(Ride1.applyDiscount());