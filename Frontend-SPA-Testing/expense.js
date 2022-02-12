import { createExpense } from "./FetchHandler.js";

export const render = (root) => {
    
    const divToReturn = document.createElement('div');
    const form = document.createElement('form');
    const header = document.createElement('h3');
    header.innerText = 'Enter information below to create an Expense';
    
    let expenseTitleLabel = document.createElement('label');
    let expenseTitleInput = document.createElement('input');
    expenseTitleInput.type = 'text';
    expenseTitleInput.placeholder = 'Expense Name';
    expenseTitleInput.id = 'expenseTitle';
    expenseTitleInput.required = true;
    expenseTitleLabel.appendChild(expenseTitleInput);

    let br1 = document.createElement('br');
    let br2 = document.createElement('br');

    let expenseAmountLabel = document.createElement('label');
    let expenseAmountInput = document.createElement('input');
    expenseAmountInput.type = 'number';
    expenseAmountInput.id = 'expenseAmount';
    expenseAmountInput.placeholder = 'Expense Amount';
    expenseAmountInput.required = true;
    expenseAmountLabel.append(expenseAmountInput);

    let br3 = document.createElement('br');
    let br4 = document.createElement('br');

    let expenseCategoryNameLabel = document.createElement('label');
    let expenseCategoryNameInput = document.createElement('input');
    expenseCategoryNameInput.type = 'text';
    expenseCategoryNameInput.id = 'expenseCategoryName';
    expenseCategoryNameInput.placeholder = 'Expense Category';
    expenseCategoryNameInput.required = true;
    expenseCategoryNameLabel.append(expenseCategoryNameInput);

    let br5 = document.createElement('br');
    let br6 = document.createElement('br');

    let expenseDateLabel = document.createElement('label');
    let expenseDateInput = document.createElement('input');
    expenseDateInput.type = 'datetime-local';
    expenseDateInput.id = 'expenseDate';
    expenseDateInput.placeholder = 'Expense Date';
    expenseDateInput.required = true;
    expenseDateLabel.append(expenseDateInput);

    let br7 = document.createElement('br');
    let br8 = document.createElement('br');

    let usernameLabel = document.createElement('label');
    let usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.id = 'username'
    usernameInput.required = true;
    usernameLabel.appendChild(usernameInput);

    let br9 = document.createElement('br');
    let br10 = document.createElement('br');

    let passwordLabel = document.createElement('label');
    let passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.id = 'password';
    passwordInput.required = true;
    passwordLabel.appendChild(passwordInput);

    let br11 = document.createElement('br');
    let br12 = document.createElement('br');

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Expense'

    form.append(header, expenseTitleLabel, br1, br2, expenseAmountLabel, br3, br4, expenseCategoryNameLabel, br5, br6, expenseDateLabel, br7, br8, submitButton);
    divToReturn.appendChild(form);
    
    form.onsubmit = async (e) =>{
        e.preventDefault();
        const expenseTitle = document.getElementById('expenseTitle').value;
        const expenseAmount = document.getElementById('expenseAmount').value;
        const expenseCategoryName = document.getElementById('expenseCategoryName').value;
        const expenseDate = document.getElementById('expenseDate').value;     
        const data = {
            'title' : expenseTitle,
            'expenseDate' : expenseDate,
            'amount' : expenseAmount,
            'categoryName' : expenseCategoryName
        };
        createExpense(data)
            .then(response =>{
                if(response.status === 200) 
            {
                alert('Expense Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
            });
    }

    
    
    root.appendChild(divToReturn);
}