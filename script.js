// console.log("The First COnsole Message");
// //Let Scoping ( Blocked Scope )
// //FIRST BLOCK

// var Topic = "JS";

// if (Topic) {
//     let Topic = "ES6";
//     console.log("local", Topic);
// }
// console.log("global", Topic);

// //SECOND BLOCK
// var div;
// var box = document.getElementById("box");

// for (let index = 0; index < 5; index++) {
//     div = document.createElement("div");
//     div.onclick = function () {
//         var Boxvalue = index + 1;
//         alert("THis is the box number " + Boxvalue);
//     }
//     box.appendChild(div);
// }

// //Const
// const pizza = true;
// console.log(pizza);

//Template String
/*function print(firstname){
    console.log(`Hello ${firstname}`);
}
print("Edged");

function createBillEmail(firstname, quantity){
    let shipping = 40;
    let ItemPrice = 80;
    console.log(`Hey ${firstname}! Thanks for shopping with us!
    Here's your Bill summary ->
        Price Per Item : $${ItemPrice}
        Quantity : $${quantity}
        Shipping Cost : $${shipping} 
        Total Cost : $${quantity * ItemPrice + shipping}
    `)
}
createBillEmail("Isabelle", 20);*/

//Searching Strings
/*const PersonName = "Jyotash M Taunk";
console.log(PersonName.startsWith("Jyotash"));
console.log(PersonName.endsWith("Taunk"));
console.log(PersonName.strike("Jyotash"));
console.log(PersonName.search("M"));*/

//Primitives - Types like array's, numbers (Symbol)
/*const Courseid = Symbol();
const courseInfo = {
    title: "Javascript",
    topics: ["strings", "objects", "arrays"],
    id: "Not a Symbol"
};
courseInfo[Courseid] = 424;
console.log(courseInfo);*/

//Maps - Date Type
//Maps objects will be returned in the order in which they were added
// let course = new Map();
// course.set("react", {description: "ui"});
// course.set("jest", {description: "test"});
// console.log(course);
// console.log(course.get("react"));

// let details = new Map([
//     [new Date(), "today"],
//     [2, {javascript: ["js1", "js2", "js3"]}],
//     ["items", [1,2]]
// ]);
// console.log(details.size);
// details.forEach(function(item){
//     console.log(item);
// })

//Sets - Collection of values that can be of any type, but each value should be unique
let books = new Set();
books.add("Pride");
books.add("at");
books.add("at");
books.add("Work").add("It's TR");
console.log(books);
console.log(books.size);
books.delete("It's TR");
//Can use Map
books.forEach(function(item){
    console.log(item);
})
console.log("Work", books.has("It's TR"));