window.onload = function() {
        showQuestions(0);
    }
    // Questions 

let questions = [{
        id: 1,
        question: "Who won the World Cup in year 1999?",
        answer: "Australia",
        options: [
            "India",
            "Australia",
            "Srilanka",
            "West Indies"
        ]
    },
    {
        id: 2,
        question: "Who won the World Cup in year 1996?",
        answer: "Srilanka",
        options: [
            "India",
            "Australia",
            "Srilanka",
            "West Indies"
        ]
    },
    {
        id: 3,
        question: "Who won the World Cup in year 1983?",
        answer: "India",
        options: [
            "India",
            "Australia",
            "Srilanka",
            "West Indies"
        ]
    },
    {
        id: 4,
        question: "Who won the World Cup in year 1979?",
        answer: "West Indies",
        options: [
            "India",
            "Australia",
            "Srilanka",
            "West Indies"
        ]
    },
    {
        id: 5,
        question: "Who won the World Cup in year 2003?",
        answer: "Australia",
        options: [
            "India",
            "Australia",
            "Srilanka",
            "West Indies"
        ]
    }
];


function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcomeForm"]["name"].value;

    // Storing a player in session storage of browser 
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
}

var question_count = 0;
var points = 0;

// function for next question 

function nextQuestion() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
        points += 10;
        sessionStorage.setItem("points", points);
    }
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
    }
    console.log(question_count);


    console.log(points);

    question_count++;
    showQuestions(question_count);
}

// Acessing the questions from the JS Arrays 

function showQuestions(count) {
    let question = document.getElementById("questions");
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<h2> Q${question_count+1}.${questions[count].question} </h2>
    <ul class="option-group">
    <li class="option"> ${questions[count].options[0]} </li>
    <li class="option"> ${questions[count].options[1]} </li>
    <li class="option"> ${questions[count].options[2]} </li>
    <li class="option"> ${questions[count].options[3]} </li>
    </ul>
    `;
    toggleActive();
}

// Creating a Function to activate one option 

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}