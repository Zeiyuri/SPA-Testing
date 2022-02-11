import { createCategory } from "./FetchHandler.js";

export const render = (root) => {
    
    const divToReturn = document.createElement('div');
    const form = document.createElement('form');
    const header = document.createElement('h3');
    header.innerText = 'Enter information below to create a category';
   
    let categoryNameLabel = document.createElement('label');
    let categoryNameInput = document.createElement('input');
    categoryNameInput.type = 'text';
    categoryNameInput.placeholder = 'Category Name';
    categoryNameInput.id = 'CategoryName';
    categoryNameInput.required = true;
    categoryNameLabel.appendChild(categoryNameInput);

    let br1 = document.createElement('br');
    let br2 = document.createElement('br');


    let usernameLabel = document.createElement('label');
    let usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.id = 'username'
    usernameInput.required = true;
    usernameLabel.appendChild(usernameInput);

    let br3 = document.createElement('br');
    let br4 = document.createElement('br');

    let passwordLabel = document.createElement('label');
    let passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.id = 'password';
    passwordInput.required = true;
    passwordLabel.appendChild(passwordInput);

    let br5 = document.createElement('br');
    let br6 = document.createElement('br');

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Category'

    form.append(header,categoryNameLabel, br1, br2 ,usernameLabel, br3 ,br4, passwordLabel,br5, br6, submitButton);
    divToReturn.appendChild(form);
    
    form.onsubmit = async (e) =>{
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const categoryName = document.getElementById('CategoryName').value;
        const data = {
            'categoryName' : categoryName
        };
        createCategory(username, password, data)
            .then(response =>{
                if(response.status === 200) 
            {
                alert('Category Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
            });
    }

    
    
    root.appendChild(divToReturn);
}