let tarefas = [];

let button = document.getElementById('button');
let input = document.getElementById('userInput');


button.addEventListener('click', function(){
    sendTask();
    input.value = '';
});

input.addEventListener('keydown', function(){
    if (event.key == "Enter") { 
        sendTask();
        input.value = '';
    }
});

function sendTask(){
    if(input.value != ''){

        let div = document.createElement('div');
        let task = document.getElementById('userInput').value;
        let showTask = document.createElement('p');
        showTask.textContent = task;
        showTask.classList.add('task-format');

        let edit = document.createElement('button');
        edit.classList.add('button', 'edit');

        edit.addEventListener('click', function(){

            let newInput = document.createElement('input');
            newInput.classList.add('task-format');
            newInput.classList.add('new-input');
            let div = event.currentTarget.parentNode;
            div.querySelector('p').remove();
            div.prepend(newInput);
            div.prepend(check);
            newInput.focus();
            newInput.addEventListener('keydown', function(){

                if (event.key == "Enter") { 
                    if(newInput.value != ''){
                        let content = newInput.value;
                        let showTask = document.createElement('p');
                        showTask.textContent = content;
                        showTask.classList.add('task-format');
                        newInput.remove();
                        div.prepend(showTask);
                        div.prepend(check);
                    } else {
                        alert('Por favor, diga qual tarefa deseja adicionar!');
                    }
                }

            })
        });

        let delet = document.createElement('button');
        delet.classList.add('button', 'delete');
        delet.addEventListener('click', function(){
            div.remove();
        });

        let check = document.createElement('button');
        check.classList.add('button', 'done', 'invisible'); 
        check.addEventListener('click', function(){
            check.classList.toggle('invisible');
            let div2 = event.currentTarget.parentNode;
            div2.querySelector('p').classList.toggle('line-through');
        });

        div.prepend(check);
        div.appendChild(showTask);
        div.appendChild(edit);
        div.appendChild(delet);
        div.classList.add('div-ajuste');
        document.getElementById('tasks__camp').appendChild(div);
        

    } else {
        alert('Por favor, diga qual tarefa deseja adicionar!');
    }
};


let darkMode = document.getElementById('mode');

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('light');
    darkMode.classList.toggle('dark');

    document.getElementById('body').classList.toggle('body-dark');
    document.getElementById('body').classList.toggle('body-light');

    document.getElementById('header').classList.toggle('header-light');
    document.getElementById('header').classList.toggle('header-dark');

    document.getElementById('form').classList.toggle('form-light');
    document.getElementById('form').classList.toggle('form-dark');

    document.getElementById('tasks__camp').classList.toggle('tasks__camp-light');
    document.getElementById('tasks__camp').classList.toggle('tasks__camp-dark');

    document.querySelector('footer').classList.toggle('footer-light');
    document.querySelector('footer').classList.toggle('footer-dark');

    document.getElementById('userInput').classList.toggle('userInput-light');
    document.getElementById('userInput').classList.toggle('userInput-dark');
});