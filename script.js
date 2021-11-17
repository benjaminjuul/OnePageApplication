/*You need to finalize the two projects quiz-program and to-do-list from section 8 and 10 at Udemy. 

Then you have to merge the two projects into one project (a single page application). 

A single page application is an application that doesn't reload the page. This means that you cannot use links to go from page to another. Instead you could hide and show blocks of HTML with JavaScript. 

You are very welcome to put your own look and fell on your project. 

Submission: Link to your online version*/

//app switcher

const btnQuiz = document.querySelector('.btn-quiz');
const btnTodos = document.querySelector('.btn-todos');
const todos = document.querySelector('.container');
const quiz = document.querySelector('.quiz-container');

btnQuiz.addEventListener('click', e => {
    e.preventDefault();
    quiz.style.display = 'block';
    todos.style.display = 'none';

});

btnTodos.addEventListener('click', e => {
    e.preventDefault();
    todos.style.display = 'block';
    quiz.style.display = 'none';
});


const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;

};

addForm.addEventListener('submit', e => {
   e.preventDefault();
   const todo = addForm.add.value.trim();
   console.log(todo);
   if(todo.length){
    generateTemplate(todo);
    addForm.reset();
   }
});

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {

Array.from(list.children)
.filter((todo) => !todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.add('filtered'));

Array.from(list.children)
.filter((todo) => todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.remove('filtered'));

};

//keyup event
search.addEventListener('keyup', () => {
     const term = search.value.trim();
     filterTodos(term);
});


//quiz

const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 25;
        }
    });
    //show result on page
    scrollTo(0,0);
    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});



//window object (global object)

//window.console.log('hello)

console.log(document.querySelector('form'));
console.log(window.document.querySelector('form'));

