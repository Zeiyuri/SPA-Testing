import {SetPassword,SetUserName,GetUserName,GetPassword,UnsetPassword,UnsetUsername} from "./CredentialsHandler.JS";
const apiHost = "https://localhost:7218/"

const credentialsAsBase64 = (username,password) => {
    return btoa(`${username}:${password}`);
};

const Fetcher = async (url,theHeaders,method,theBody) =>{
   const tmp = {
       method: `${method}`,
       headers: theHeaders,
       body: theBody
   }
   return await fetch(url, tmp);
};
  
const login = async (username,password) => {
    const resp = await Fetcher(`${apiHost}api/login`,
                          {Authorization: `Basic ${credentialsAsBase64(username,password)}`},
                          "POST" );
    if(resp.status == 200){
        SetUserName(username);
        SetPassword(password);
    }
    return resp;
};

const logout = async (username,password) => {
    const resp =  await Fetcher(`${apiHost}api/logout`,
                          {Authorization:`Basic ${credentialsAsBase64(username,password)}`},
                          "POST")
            if(resp.status == 200){
                UnsetUsername();
                UnsetPassword();
            }
            return resp;
            };

const registerUser = async (body) => {
    return await Fetcher(`${apiHost}api/create`, 
    {'Content-Type': 'application/json'},
    "POST",JSON.stringify(body))
};
const createExpense = async (body) => {
    return await Fetcher(`${apiHost}api/createExpense`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(GetUserName(),GetPassword())}`
    },
    'POST',
    JSON.stringify(body)
    )
}
const createCategory = async (username,password,body) => {
    return await Fetcher(`${apiHost}api/createExpenseCategory`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(username,password)}`
    },
    'POST',
    JSON.stringify(body)
    )
};
const getExpenses = async () => {
    return [{"Name":"Shoes","Price":"100","Category":"Leisure","Date":"2022-02-12"},
            {"Name":"Dog","Price":"200","Category":"Farming Equipment","Date":"2022-02-12"},
            {"Name":"Donkey","Price":"300","Category":"Domestic Animal","Date":"2022-02-12"}]
}
export {login, logout, registerUser, createExpense,createCategory,getExpenses}
