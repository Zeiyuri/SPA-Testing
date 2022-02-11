import { registerUser } from "./FetchHandler.js"

export const render = (root) => {
    
    const divToReturn = document.createElement('div');
    const form = document.createElement('form');
    const header = document.createElement('h3');
    header.innerText = 'Enter information below to create an Account';
   
    let fNameLabel = document.createElement('label');
    let fNameInput = document.createElement('input');
    fNameInput.type = 'text';
    fNameInput.placeholder = 'First Name';
    fNameInput.id = 'fName';
    fNameInput.required = true;
    fNameLabel.appendChild(fNameInput);

    let br1 = document.createElement('br');
    let br2 = document.createElement('br');

    let lNameLabel = document.createElement('label');
    let lNameInput = document.createElement('input');
    lNameInput.type = 'text';
    lNameInput.id = 'lName';
    lNameInput.placeholder = 'Last Name';
    lNameInput.required = true;
    lNameLabel.append(lNameInput);

    let br3 = document.createElement('br');
    let br4 = document.createElement('br');

    let cityLabel = document.createElement('label');
    let cityInput = document.createElement('input');
    cityInput.type = 'text';
    cityInput.id = 'city';
    cityInput.placeholder = 'City';
    cityInput.required = true;
    cityLabel.append(cityInput);

    let br5 = document.createElement('br');
    let br6 = document.createElement('br');

    let usernameLabel = document.createElement('label');
    let usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.placeholder = 'Username';
    usernameInput.id = 'username'
    usernameInput.required = true;
    usernameLabel.appendChild(usernameInput);

    let br7 = document.createElement('br');
    let br8 = document.createElement('br');

    let emailLabel = document.createElement('label');
    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'Email Adress';
    emailInput.required = true;
    emailLabel.append(emailInput);

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

    let genderSelect = document.createElement('select');
    let optionOne = document.createElement('option');
    let optionTwo = document.createElement('option');
    genderSelect.id = 'gender';
    genderSelect.name = 'Gender';
    genderSelect.required = true;
    optionOne.value='Male';
    optionOne.selected = true;
    optionOne.innerText = 'Male';
    optionTwo.value = 'Female';
    optionTwo.innerText = 'Female';
    genderSelect.appendChild(optionOne);
    genderSelect.appendChild(optionTwo);

    let br13 = document.createElement('br');
    let br14 = document.createElement('br');

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Account'

    form.append(header, fNameLabel, br1, br2, lNameLabel, br3, br4, cityLabel, br5, br6, usernameLabel, br7, br8, emailLabel, br9, br10, passwordLabel, br11, br12, genderSelect, br13, br14, submitButton);
    divToReturn.appendChild(form);
    
    form.onsubmit = async (e) =>{
        e.preventDefault();
        const fName = document.getElementById('fName').value;
        const lName = document.getElementById('lName').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const select = document.getElementById('gender');
        const GenderValue = select.options[select.selectedIndex].value;
        
        const data = {
            'lname': lName,
            'fname': fName,
            'username': username,
            'email': email,
            'password': password,
            'gender': GenderValue,
            'city': city
            };
        registerUser(data)
            .then(response =>{
                if(response.status === 200) 
            {
                alert('Account Successfully Created!')
            } 
            else
            {
                alert('Something went wrong!')
            }
            });
    }

    
    
    root.appendChild(divToReturn);
}