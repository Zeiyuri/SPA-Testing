import { render as loginRender} from "./login.js";
import {render as expenseRender} from "./expense.js";
import {render as categoryRender} from "./category.js"
import {render as logoutRender} from "./logout.js";
import {render as registerRender} from "./register.js";
import { registerChangeListener } from "./router.js";
import { Header } from "./header.js";


const header = new Header();
const root = document.getElementById('root');

registerChangeListener((newPage) =>{
    root.innerHTML ='';
    switch (newPage) {
        case 'login':
            loginRender(root);
            break;
        case 'expense':
            expenseRender(root);
            break;
        case 'category':
            categoryRender(root);
            break;
        case 'logout':
            logoutRender(root);
            break;
        case 'register':
            registerRender(root);
            break;
        default:
            break;
    }
})

loginRender(root);


