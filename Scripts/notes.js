// Using and printing to the console

console.log("Hello World");

// Variables

let firstName = 'Marek';
let lastName = 'Holly';

console.log(firstName);
console.log(lastName);

const courseName = 'Web Design for Beginners';

console.log(courseName);

firstName = 'David';

console.log(firstName);

// Concatenation of strings and variables

console.log('My name is ' + firstName + ' ' + lastName + '.');
console.log("Marek's Poutine Pub");
console.log('Marek said "I love poutine!"');

// Query Selector

const h1 = document.querySelector('h1');
console.log(h1);

const navButtons = document.querySelectorAll('.nav-link');
console.log(navButtons);

// Lists (Arrays)

let courseList = ['Cindy', 'Nia', 'Sugar', 'Janice', 'Lucy', 45, true, h1];
console.log(courseList);
courseList[5] = 'Nyima';
console.log(courseList);

// List Length

let classAttendance = courseList.length;
console.log('Our class has ' + classAttendance + ' people attending!');

// InnerHTML and InnerText

h1.innerText = "Nyima's Poutine Pub";

const header = document.querySelector('header');
console.log(header.innerHTML);
console.log(header.innerText);

// classList

const sectionList = document.querySelectorAll('section');
console.log(sectionList);

sectionList[1].classList.remove('reverse-flex');
sectionList[0].classList.add('reverse-flex');

// Functions

function myGreeting() {
    console.log('Hey there!');
    console.log('Hope you are enjoying the class!');
}

// Loops
// If loop - run something only if something is true

function timeGreeting() {
    // I want this function to give the proper greeting for the current time of day
    let date = new Date();
    console.log(date);
    let time = date.getHours();
    if (time < 12){
        console.log('Good Morning!');
    } else if (time < 18){
        console.log('Good Afternoon!');
    } else {
        console.log('Good Night!');
    }
}

// While and For loops

function timesTable(){
    let multiplier = 6;
    let number = 1;
    while (number <=20){
        console.log(number + ' x ' + multiplier + ' = ' + number*multiplier);
        // number = number+1;
        number++;
    }
    // console.log('1 x 6 = ' + 1*6);
    // console.log('2 x 6 = ' + 2*6);
}

function forTimesTable(multiplier,limit){
    for (let number = 1; number <= limit; number++){
        console.log(number + ' x ' + multiplier + ' = ' + number*multiplier);
    }
}

// Event Listeners

h1.addEventListener('click', timeGreeting);