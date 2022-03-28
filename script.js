const quizDB=[
    {
        question: "Q1: Who is the first education mnister of India?",
        a: "Lal Bahadur sastri",
        b: "V.P Singh",
        c: "Maulana Abul Kalam Azad",
        d: "Morarji Desai",
        ans: "ans3"
    },
    {
        question: "Q2: How many Lok Sabha seats are there in India?",
        a: "250",
        b: "545",
        c: "403",
        d: "243",
        ans: "ans2"
    },
    {
        question: "Q3: where is the capital of Assam?",
        a: "Dispur",
        b: "Panji",
        c: "Shimla",
        d: "Kohima",
        ans: "ans1"
    },
    {
        question: "Q4: What is the unit of Current?",
        a: "Watt",
        b: "Newton",
        c: "Joule",
        d: "Ampere",
        ans: "ans4"
    },
    {
        question: "Q5: Thermometer is used to measure ?",
        a: "Energy",
        b: "Pressure",
        c: "Temperature",
        d: "Current",
        ans: "ans3"
    },
    {
        question: "Q6: find the missing term in the series 2, 5, 9, 19, 37, ? ",
        a: "73",
        b: "55",
        c: "75",
        d: "78",
        ans: "ans3"
    },
    {
        question: "Q7: What is the Full form of HTML ?",
        a: "Hello Text make Language",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Marrkup Land",
        d: "Hyper Test making language",
        ans: "ans2"
    },
    {
        question: "Q8: Choose the odd word",
        a: "Zebra",
        b: "Lion",
        c: "Giraffe",
        d: "Horse",
        ans: "ans4"
    },
    {
        question: "Q9: What is the currency of  UK?",
        a: "Taka",
        b: "Pound",
        c: "Dollar",
        d: "Rouble",
        ans: "ans2"
    },
    {
        question: "Q10: Synonym of word 'Substitute' ?",
        a: "Replace",
        b: "Eliminata",
        c: "Remove",
        d: "Empty",
        ans: "ans1"
    },
   
    
]

const question= document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const showScore=document.querySelector('#showScore')

const answers=document.querySelectorAll('.answer');

let questionCount=0;
let score=0;

const loadQuestion=() => {
    const questionList=quizDB[questionCount];
    question.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;

}
loadQuestion();

const getCheckAnswer=() =>{
    let answer;
    answers.forEach((el)=>{
        if(el.checked){
            answer=el.id;
        }

    });
    return answer;

}

const deselectAll=()=>{
    answers.forEach((el) =>el.checked=false);
}
submit.addEventListener('click', ()=>{

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
            <h3>You Scored ${score}/${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()"> play again!</button>
        `;

        showScore.classList.remove('scoreArea');


    }
});
