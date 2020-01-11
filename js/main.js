// You js goes here
// localStorage.clear();
var state = [{
        id: 0,
        question: "Why so JavaScript and Java have similar name?",
        ans: "B",
        result: false,
        A: "JavaScript is a stripped-down version of Java",
        B: "JavaScript's syntax is loosely based on Java's",
        C: "They both originated on the island of Java",
        D: "None of the above"

    },
    {
        id: 1,
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        ans: "A",
        result: false,
        A: "The User's machine running a Web browser",
        B: "The Web server",
        C: "A central machine deep within Netscape's corporate offices",
        D: "None of the above"
    },
    {
        id: 2,
        question: "______ JavaScript is also called client-side JavaScript.",
        ans: "B",
        result: false,
        A: "Microsoft",
        B: "Navigator",
        C: "LiveWire",
        D: "Native"
    },
    {
        id: 3,
        question: "What are variables used for in JavaScript Programs?",
        ans: "A",
        result: false,
        A: "Storing numbers, dates, or other values",
        B: "Varying randomly",
        C: "Causing high-school algebra flashbacks",
        D: "None of the above"
    },
    {
        id: 4,
        question: " _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        ans: "A",
        result: false,
        A: "Client-side",
        B: "Server-side",
        C: "Local",
        D: "Native"
    },
    {
        id: 5,
        question: "Which of the following can't be done with client-side JavaScript?",
        ans: "C",
        result: false,
        A: " Validating a form",
        B: "Sending a form's contents by email",
        C: "Storing the form's contents to a database file on the server",
        D: "None of the above"
    },
    {
        id: 6,
        question: "Which of the following are capabilities of functions in JavaScript?",
        ans: "C",
        result: false,
        A: "Return a value",
        B: "Accept parameters and Return a value",
        C: "Accept parameters",
        D: "None of the above"
    },
    {
        id: 7,
        question: "Which of the following attribute can hold the JavaScript version?",
        ans: "A",
        result: false,
        A: "LANGUAGE",
        B: "SCRIPT",
        C: "VERSION",
        D: "None of the above"
    },
    {
        id: 8,
        question: "JavaScript entities start with _______ and end with _________.",
        ans: "D",
        result: false,
        A: "Semicolon, colon",
        B: "Semicolon, Ampersand",
        C: "Ampersand, colon",
        D: "Ampersand, semicolon"
    },
    {
        id: 9,
        question: "How does JavaScript store dates in a date object?",
        ans: "A",
        result: false,
        A: "The number of milliseconds since January 1st, 1970",
        B: "The number of days since January 1st, 1900",
        C: "The number of seconds since Netscape's public stock offering.",
        D: "None of the above"
    },

]
var highScore = localStorage.getItem('highScore') || 0;


let img = document.querySelector('img');

var current_question = 0; //index 0 base
var final_score = 0;

var q1 = undefined;
var q2 = undefined;
var q3 = undefined;

function result() {
    final_score = calculate_score();

    if (final_score == 0) {
        final_score = "0";
    }
    if (final_score > highScore) {
        highScore = final_score;
        localStorage.setItem('highScore', '' + highScore);
    }

    // return;
    view_question()
}

function calculate_score() {
    let current_score = 0;
    for (let i = 0; i < state.length; i++) {
        if (state[i].result == true) {
            current_score += 10;
        }
    }
    return current_score;
}

function pre_question() {
    if (current_question > 0) {
        current_question -= 1;
    } else {
        current_question = state.length - 1;
    }
    view_question();
}

function next_question() {
    if (current_question < state.length - 1) {
        current_question += 1;
    } else {
        current_question = 0;
    }
    view_question();
}

function check_ans() {
    view_question();
    let input = document.getElementsByName("option");
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked) {
            if (input[i].value == state[current_question].ans) {
                state[current_question].result = true;

                q1 = q2;
                q2 = q3;
                q3 = true;
            } else {
                state[current_question].result = false;
                q1 = q2;
                q2 = q3;
                q3 = false;
            }
        }
    }
    next_question();
    view_question();
}

// function go(event){
//     console.log(event);
// }


function view_question() {
    let q_num = document.querySelector(".question_number");

    q_num.textContent = "Question " + (current_question + 1) + " of " + state.length;
    let question1 = document.querySelector(".question");
    question1.textContent = (current_question + 1) + '. ' + state[current_question].question;

    let opt1 = document.querySelector(".opt1");
    let opt2 = document.querySelector(".opt2");
    let opt3 = document.querySelector(".opt3");
    let opt4 = document.querySelector(".opt4");

    opt1.textContent = state[current_question].A;
    opt2.textContent = state[current_question].B;
    opt3.textContent = state[current_question].C;
    opt4.textContent = state[current_question].D;

    let score = document.querySelector(".score");
    let finalscore = document.querySelector('.finalscore');
    let Hscore = document.querySelector(".highest_score");
    score.textContent = "Score : " + calculate_score();
    if (final_score) {
        finalscore.textContent = "final score " + final_score;
    }
    if (highScore) {
        if (final_score > highScore) {
            highScore = parseInt(final_score);
            localStorage.setItem('highScore', highScore);
        }
        Hscore.textContent = 'highest score ' + highScore;

    }
    if (q1 === false && q2 === false && q3 == true) {
        img.src = './img/Screenshot from 2020-01-10 18-08-38.png';
    } else {
        if (q2 == false && q3 == false) {
            img.src = './img/EK4q_n8U0AAd0Oa.jpg';
        } else {
            img.src = '';
        }
    }


//    change

    let small_boxes = document.querySelector(".small_box_container");
    small_boxes.addEventListener('click' , function(event){
        console.log(typeof(event.target.dataset.key));
       
        current_question = parseInt(event.target.dataset.key) - 1;   
         view_question();
    });




}

view_question();