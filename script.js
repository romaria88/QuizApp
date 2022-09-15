const question = document.querySelector('.main_question');


const var1 = document.querySelector('.var1');
const var2 = document.querySelector('.var2');
const var3 = document.querySelector('.var3');
const var4 = document.querySelector('.var4');


const varElements = document.querySelectorAll('.var');
//console.log(varElements);





const btn = document.querySelector('.btn');


let score = 0;
const correctAnswer = document.querySelector('.correct_answer');
const btnCorrect = document.querySelector('.btn_correct');


const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",  
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const load = () => {
    main_var.innerHTML[1].main_var;
}
// window.addEventListener('load', )