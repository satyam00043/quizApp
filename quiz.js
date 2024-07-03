const quizData = [
    {
        question: "What is Angular?",
        options: [
            "A server-side programming language",
            "A client-side JavaScript framework",
            "A database management system",
            "A text editor"
        ],
        answer: "A client-side JavaScript framework"
    },
    {
        question: "Which command is used to create a new Angular project?",
        options: [
            "ng new project-name",
            "ng create project-name",
            "angular create project-name",
            "angular new project-name"
        ],
        answer: "ng new project-name"
    },
    {
        question: "What does Angular use to extend HTML functionality?",
        options: [
            "Directives",
            "Modules",
            "Controllers",
            "Services"
        ],
        answer: "Directives"
    },
    {
        question: "Which directive is used to conditionally include or exclude an element in Angular?",
        options: [
            "ngIf",
            "ngFor",
            "ngSwitch",
            "ngInclude"
        ],
        answer: "ngIf"
    },
    {
        question: "What is the purpose of Angular CLI?",
        options: [
            "To create a new Angular project",
            "To add new features to Angular",
            "To run Angular applications",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What is the lifecycle hook that gets called after Angular initializes the component’s view?",
        options: [
            "ngOnInit",
            "ngAfterViewInit",
            "ngOnChanges",
            "ngDoCheck"
        ],
        answer: "ngAfterViewInit"
    },
    {
        question: "Which pipe can be used to format a date in Angular?",
        options: [
            "currency",
            "date",
            "slice",
            "json"
        ],
        answer: "date"
    },
    {
        question: "What is the default port for Angular applications using ng serve?",
        options: [
            "3000",
            "4200",
            "8080",
            "8000"
        ],
        answer: "4200"
    },
    {
        question: "Which module is required to perform HTTP requests in Angular?",
        options: [
            "HttpModule",
            "HttpClientModule",
            "HttpRequestModule",
            "HttpServiceModule"
        ],
        answer: "HttpClientModule"
    },
    {
        question: "What is the purpose of Angular Router?",
        options: [
            "To handle HTTP requests",
            "To manage navigation between different views",
            "To provide dependency injection",
            "To create reusable components"
        ],
        answer: "To manage navigation between different views"
    }
];

const questionelement = document.querySelector('.question');
const optionElements = document.querySelectorAll('.option');
const submitbtn = document.querySelector('.submit');
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = '';

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionelement.innerText = currentQuestion.question;
    optionElements.forEach((optionElement, index) => {
        optionElement.textContent = currentQuestion.options[index];
        optionElement.onclick = () => {
            selectedAnswer = currentQuestion.options[index];
            optionElements.forEach(opt => opt.classList.remove('active'));
            optionElement.classList.add('active');
        };
    });
}

submitbtn.addEventListener('click', () => {
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        alert(`Quiz completed! Your score is ${score}/${quizData.length}`);
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }
    selectedAnswer = '';
    optionElements.forEach(opt => opt.classList.remove('active'));
});

showQuestion();
