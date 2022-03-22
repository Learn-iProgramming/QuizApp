// Array of an object Created
const quizQuestions = [
    {
        question: "Q1: What is the full form of HTML?",
        A: "HyperTexts Markup Language",
        B: "Hypertext Markup Language",
        C: "Hello To My Landon",
        D: "Hey Text Markup Language",
        ans: "B"
    },
    {
        question: "Q2: What is the full form of JS?",
        A: "JavaScript",
        B: "JavaSuper",
        C: "JustScript",
        D: "JavaShut",
        ans: "A"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        A: "HyperText Transfer Product",
        B: "Hypertext Transfer Protocol",
        C: "Hello Transfer Protocol",
        D: "Hypertext Test Protocol",
        ans: "B"
    },
    {
        question: "Q4: What is the full form of CSS?",
        A: "Cascading Style Sheets",
        B: "Cascading Style Sheeps",
        C: "Cartoon Style Sheets",
        D: "Cascading Super Sheets",
        ans: "A"
    },
    {
        question: "Q5: What CSS describes?",
        A: "CSS describes how calculation perform on button click",
        B: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
        C: "Both A and B",
        D: "None of the above",
        ans: "B"
    },
    {
        question: "Q6: What is a CSS selector?",
        A: "A CSS selector is the CSS class name",
        B: "A CSS selector is the set of properties that are going to be applied on HTML elements",
        C: "A CSS selector is name of CSS file.",
        D: "A CSS selector is the first part of a CSS Rule. It may an HTML element or pattern of elements.",
        ans: "D"
    },
    {
        question: "Q7: In a CSS file, there is a CSS rule for paragraphs tags – what does p can be called?",
        A: "Selector",
        B: "Attribute",
        C: "Property",
        D: "Tag",
        ans: "A"
    },

];

// References get for the content show on dom
const allQuestions = document.querySelector('.questions');
const select1 = document.querySelector('#select1');
const select2 = document.querySelector('#select2');
const select3 = document.querySelector('#select3');
const select4 = document.querySelector('#select4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const totalScore = document.querySelector('#totalScore');

// For the questions different index no gives and shows different questions
let quesCount = 0;
let marks = 0;

// showed questions on dom
const showQuestions = () => {
    // console.log(quizQuestions[0].question);
    // all questions show on dom
    const quesCollection = quizQuestions[quesCount];
    allQuestions.innerText =  quesCollection.question;

    // All options show on dom
    select1.innerText = quesCollection.A;
    select2.innerText = quesCollection.B;
    select3.innerText = quesCollection.C;
    select4.innerText = quesCollection.D;
}
// function call
showQuestions();



// selected ans correct or not check
const correctAns = () => {
    let selectedAnswer;

    // currentElemAns means first option a
    answers.forEach((currentElemAns) => {
        // Here used -> Input Checkbox checked Property
        if(currentElemAns.checked){
            // currentElemAns which option(selected) checked that id gives
            selectedAnswer = currentElemAns.id;
        }
    });

    return selectedAnswer;
}

const deselectAll = () => {
    answers.forEach((currentElemAns) => currentElemAns.checked = false);
}

submit.addEventListener('click', () => {
    const checkAns = correctAns(); 
    // In the option what to select that id shows
    // console.log(checkAns);

    // checkAns id is equal to quizQuestions
    if(checkAns === quizQuestions[quesCount].ans){
        marks++;
    };

    quesCount++;

    // when answers submited then second question answer default selected for that problem solve 
    // function call
    deselectAll();

    // if first ans submited then second question show so on
    if(quesCount < quizQuestions.length){
        showQuestions();
    }
    else{
        // total correct ans shows
        totalScore.innerHTML = `
        <h3> Total scored ${marks}/${quizQuestions.length} </h3>

        <button class="btn" onclick="location.reload()"> Start Again </button>
        `;

        totalScore.classList.remove('showScoreBox');
    }
});








// Input Checkbox checked Property
// Definition and Usage
// The checked property sets or returns the checked state of a checkbox.
// This property reflects the HTML checked attribute.

// // Property Values
// Value	             Description
// true|false	        Specifies whether a checkbox should be checked or not.
// true -              The checkbox is checked
// false -             Default. The checkbox is not checked

// Technical Details
// Return Value:	A Boolean, returns true if the checkbox is checked, and false if the checkbox is not checked