const questions = [
    {
        question: "What is Internet?",
        answers: [
            {text: "A network of interconnected local area networks", correct: false},
            {text: "A collection of unrelated computers", correct: false},
            {text: "A single network", correct: false},
            {text: "Interconnection of wide area networks", correct: true},
        ]
    },
{
    question: "What is the term for the data communication system within a building or campus? ",
    answers: [
        {text: "WAN", correct: false},
        {text: "LAN", correct: true},
        {text: "MAN", correct: false},
        {text: "PAN", correct: false},
    ]
},
{
    question: "What was the name of the first network?",
    answers: [
        {text: "ASAPNET", correct: false},
        {text: "CNNET", correct: false},
        {text: "ARPANET", correct: true},
        {text: "NSFNET", correct: false},
    ]
},
{
    question: "What is full form of OSI?",
    answers: [
        {text: "Open system interface", correct: false},
        {text: "Open system interconnection", correct: true},
        {text: "Open sevice internet", correct: false},
        {text: "Operating system implementation ", correct: false},
    ]
},
{
    question: "Which is the Linux operating system?",
    answers: [
        {text: "Private operating system", correct: false},
        {text: "Windows operating system", correct: false},
        {text: "Open Source operating system", correct: true},
        {text: "None of the above", correct: false},
    ]
},
{
    question: "Who is Known as father of JAVA?",
    answers: [
        {text: "Satya Nadella", correct: false},
        {text: "Mark Zukerberg", correct: false},
        {text: "Bill Gates", correct: false},
        {text: "James Gosling", correct: true},
    ]
},
{
    question: "Which of the following is not an Operating System?",
    answers: [
        {text: "Windows", correct: false},
        {text: "Linux", correct: false},
        {text: "Oracle", correct: true},
        {text: "DOS", correct: false},
    ]
  },
  {
    question: "Which of the following data structures allow insertion and deletion from both ends?",
    answers: [
        {text: "Stack", correct: false},
        {text: "Queue", correct: false},
        {text: "Strings", correct: false},
        {text: "Deque", correct: true},
    ]
},
{
    question: "Which of the following data structures can be used to impement queues?",
    answers: [
        {text: "Stack", correct: false},
        {text: "Arrays", correct: false},
        {text: "Linked List", correct: false},
        {text: "All of above", correct: true},
    ]
},
{
    question: "How an array initialized in C language?",
    answers: [
        {text: "int a[4]={2,4,6,8};", correct: true},
        {text: "int a = {2,4,6,8};", correct: false},
        {text: "int a[] = new int[4];", correct: false},
        {text: "int a(4) = [2,4,6,8];", correct: false},
    ]
},
{
    question: "The tags in HTML are?",
    answers: [
        {text: "in upper case", correct: false},
        {text: "not case sensative ", correct: false},
        {text: "in lower case", correct: false},
        {text: "case-sensative", correct: true},
    ]
},
{
    question: "Devops is an extension of _____?",
    answers: [
        {text: "QA", correct: false},
        {text: "Waterfall", correct: false},
        {text: "Agile", correct: true},
        {text: "None of the above", correct: false},
    ]
},
{
    question: "What is the use of Git?",
    answers: [
        {text: "Containerization tool", correct: false},
        {text: "Continuous integration tool", correct: false},
        {text: "Continuous Monitoring tool ", correct: false},
        {text: "Version Control System tool", correct: true},
    ]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
        length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
       
    }
});
startQuiz();
