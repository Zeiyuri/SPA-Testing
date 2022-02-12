const GetUserName = () => {
    return localStorage.getItem("username");
}

const GetPassword = () => {
    return localStorage.getItem("password");
}

const SetUserName = (username) =>{
    alert(username);
    localStorage.setItem("username",`${username}`)
}

const SetPassword = (password) => {
    localStorage.setItem("password",`${password}`)
}

const UnsetUsername = () => {
    localStorage.removeItem("username");
}
const UnsetPassword = () => {
    localStorage.removeItem("password");
}
export{GetPassword,GetUserName,SetPassword,SetUserName,UnsetUsername,UnsetPassword};