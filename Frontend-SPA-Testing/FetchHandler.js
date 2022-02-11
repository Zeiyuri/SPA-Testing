import * as ch from "./CredentialsHandler.JS";
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
    return await Fetcher(`${apiHost}api/login`,
                          {Authorization: `Basic ${credentialsAsBase64(username,password)}`},
                          "POST" );
};

const logout = async (username,password) => {
    return await Fetcher(`${apiHost}api/logout`,
                          {Authorization:`Basic ${credentialsAsBase64(username,password)}`},
                          "POST")
            };

const registerUser = async (body) => {
    return await Fetcher(`${apiHost}api/create`, 
    {'Content-Type': 'application/json'},
    "POST",JSON.stringify(body))
};
const createExpense = async (username, password, body) => {
    return await Fetcher(`${apiHost}api/createExpense`,
    {
        'Content-Type': 'application/json',
        Authorization:`Basic ${credentialsAsBase64(username,password)}`
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
export {login, logout, registerUser, createExpense,createCategory}
