import { logout } from "./FetchHandler.js";
import { GetUserName, GetPassword, isUserLoggedIn } from "./CredentialsHandler.JS";
import { changePage } from "./router.js";
export const render = (root) => {
    const divToReturn = document.createElement("div");
    if(isUserLoggedIn()){
        const LogoutButton = document.createElement("button");
        LogoutButton.textContent = "Logout";
        LogoutButton.onclick = (event) => {
            logout(GetUserName(), GetPassword()).then( (resp)=> {
            if(resp.status === 200){
                alert("User logged out")
                changePage("login");
            }
            else {
                alert("Something went wrong");
            }
            })}
        divToReturn.appendChild(LogoutButton);
    }
    else {
        const ErrorP = document.createElement("p");
        ErrorP.textContent = "User not logged in";
        divToReturn.appendChild(ErrorP);
    }
   /*  const divToReturn = document.createElement('div');
    let form = document.createElement("form");
    let header = document.createElement("h3");
    header.innerText = "Log out here";

    let usernameLabel = document.createElement("label");
    let usernameInput = document.createElement("input");
    usernameInput.type="text";
    usernameInput.placeholder="Username";
    usernameInput.id="username";
    usernameInput.required = true;
    usernameLabel.appendChild(usernameInput);

    let br1 = document.createElement('br');
    let br2 = document.createElement('br');

    let passwordLabel = document.createElement("label");
    let passwordInput = document.createElement("input");
    passwordInput.type="password";
    passwordInput.required=true;
    passwordInput.placeholder="Password";
    passwordInput.id="password";
    passwordLabel.appendChild(passwordInput);

    let br3 = document.createElement('br');
    let br4 = document.createElement('br');

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Log Out';

    form.append(header, usernameLabel, br1, br2, passwordLabel, br3, br4, submitButton)
    divToReturn.appendChild(form);


    form.onsubmit = async (e) =>{
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        logout(username, password)
            .then(response =>{
                if(response.status === 200) 
            {
                alert('Log out Successful')
            } 
            else
            {
                alert('Something went wrong!')
            }
            });
    }
 */
    root.appendChild(divToReturn);
}