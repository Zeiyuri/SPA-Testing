import { createCategory } from "./FetchHandler.js";
import { GetUserName } from "./CredentialsHandler.JS";
export const render = (root) => {
    const divToReturn = document.createElement('div');
    if(!GetUserName()){
        const MessageP = document.createElement("p");
        MessageP.textContent = "Please login in order to be able to create a category";
        divToReturn.appendChild(MessageP);  
    }
    else {
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
    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Category'

    form.append(header,categoryNameLabel, br1, br2 , submitButton);
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
    }

    
    
    root.appendChild(divToReturn);
}