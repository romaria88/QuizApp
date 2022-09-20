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
   
const headerContainer = document.querySelector('.quiz-header');
const listContainer = document.querySelector('.quiz-list');
const submitBtn = document.querySelector('.quiz-submit');
//console.log(headerContainer);


let questionIndex = 0;
const title = document.querySelector('.title');
const a_answer = document.querySelector('.a_answer');
const b_answer = document.querySelector('.b_answer');
const c_answer = document.querySelector('.c_answer');
const d_answer = document.querySelector('.d_answer');


function showQuestion(){
    //console.log(headerTemplate)
    title.innerHTML = quizData[questionIndex].question //или через опред const headerTemplate = quizData[questionIndex]
    a_answer.innerHTML = quizData[questionIndex].a
    b_answer.innerHTML = quizData[questionIndex].b
    c_answer.innerHTML = quizData[questionIndex].c
    d_answer.innerHTML = quizData[questionIndex].d
}
showQuestion();

//кнопка Submit и след вопрос

submitBtn.addEventListener('click', nextShowQuestion);

function nextShowQuestion() {
    for (let i = 0; i <= quizData.length; i++);
    //
};
nextShowQuestion();  


let score = 0;

correct_a_answer = document.querySelector('.a_answer').value;
correct_b_answer = document.querySelector('.b_answer').value;
correct_c_answer = document.querySelector('.c_answer').value;
correct_d_answer = document.querySelector('.d_answer').value;


if (correct_a_answer == quizData[0].correct) {
    score += 1;
}
if (correct_b_answer == quizData[1].correct) {
    score += 1;
}
if (correct_c_answer == quizData[2].correct) {
    score += 1;
}
if (correct_d_answer == quizData[3].correct) {
    score += 1;
}

let result = score;
document.querySelector('res').innerHTML = 'You answered ' + 'result' + '/4 quiestions correctly';
console.log(result); 