
// Create form
const form = document.createElement("form");
form.id = "studentForm";

// ------- Name Field ----------
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name: ";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// ------- Age Field -       ------
const ageLabel = document.createElement("label");
ageLabel.textContent = "Age: ";
const ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.id = "age";
form.appendChild(ageLabel);
form.appendChild(ageInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// ------- Email Field ---  ----
const emailLabel = document.createElement("label");
emailLabel.textContent = "Email: ";
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.id = "email";
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// ------- Submit Button -------
const btn = document.createElement("button");
btn.textContent = "Submit";
btn.type = "button";
btn.onclick = submitForm;
form.appendChild(btn);

// Add form to body
document.body.appendChild(form);

// ------- Output Section -------
const output = document.createElement("p");
output.id = "output";
document.body.appendChild(output);


// ---------- Submit Function ----------
function submitForm() {
    const name = nameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;

    if (name === "" || age === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    output.innerHTML =
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Email: " + email;
}



/*2 TABLE
for(count=1;count<=10;count++)
    
{
    console.log(count+"*3="+(count*3))
}
*/


/* for loop decrease value

for(count=10;count>=1;count--)//decrease value
{
    console.log(count)
}
*/

/*print the even num
for(count=1;count<=10;count++)//print the even num
if(count%2==0)
{
    console.log(count)
}





*/


/*if else condition vowels

var ch = 'A';  // you can change the character

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
    ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') 
{
    console.log(ch + " is a vowel");
}
else {
    console.log(ch + " is a consonant");
}
*/

/* task between 50 to 70
var score=2
if (score<=50)
{
    console.log("you need to improve your knowledge")
}

else if (score>50 && score<=70)//between 50 to 70
{
    console.log("good job")
}
else if(score>70)
{
    console.log("excellent performance")
}

*/

/* odd or even
var number=11
if (number %2==0)
{
    console.log("the number is even")
}
else if (number %2!=0)
{
    console.log("the number is odd")
}
*/

/* odd or even
var num=3
if(num %2==0)
{
    console.log("this number is even")
}
else{
    console.log("this number is odd")
}
*/

/*  task if condition trafic color
var color = "green"
if (color == "red")
 {
  console.log("stop")
}

if (color == "yellow") {
  console.log("get ready")
}

if (color == "green") {
  console.log("go")
}
*/

/* season task

var season="spring"
if(season=="spring")
{
    console.log("enjoy the blooming flow")
}

else if(season=="summer")
{
    console.log("have fun in the sum")
}

else if(season=="fall")
{
    console.log("addmire the colorful leaves")
}
else if(season=="winter")
{
    console.log("Bundle up and stay warm")
}
*/


/* if condition
var homework 
if ( homework= true)
{
    console.log("great job")
}
else{
    console.log("finishing your homework before playing")
}
*/

/*var cookies
if(cookies=true)
{
    console.log("would you like a cookie?")
}
else{
    console.log("time to bake more cookies.")
}
*/

/*task teeth your brush if else condition
var brush
if(brush=true)
{
    console.log("your teeth are clean.")
}
else{
    console.log("go brush your teeth now.")
}
*/

/* birthday if else condition
var birthday 
if(birthday=false)
{
    console.log("happy birthday! enjoy your special day!")
}
else{
    console.log("have a great day")
}
*/

 /*function return type

function add (a,b) //passing parameter
{
    return a+b
}
 
var total=add(10,20)
console.log(total)
*/

/* area l*b
function area(l,b)
{
    var a=l*b
    console.log("area is:"+a)
}
var length=10
var breadth=20

area (10,20)
*/

/* area length

function area(length,breadth) //len,bred is parameter
{
 console.log(length*breadth)
}
area(10,20)
*/

/* example of function
var FActor ="vijay"
var Fplayer="ms dhoni"
var Fmovie="pariyerum perumal"
function Favourite()
{
console.log("Favourite Actor:"+FActor)
console.log("Favourite plsyer:"+Fplayer)
console.log("Favourite movie:"+Fmovie)
}
Favourite()
*/

/*function syntax
function iphone()
{
    console.log("this is iphone")
}
function redmi()
{
    console.log("this is redmi phone")
}
function oppo()
{
    console.log("this is my oppo phone")
}
iphone() */

/* pre increment
var a = 10
var b = ++a
console.log(b) */

/*var FruiteName="apple"
var count=10
var price=5
var total = count*price
console.log(FruiteName)
console.log(total)

*/
/*variable

var price = 100
var product = "iphone12"
var tax = 20
console.log(product)
var total = price + tax
console.log(total)
*/
