import {Client} from "./Client.js";
import {Manager} from "./Employee/Manager.js"
import {Director} from "./Employee/Director.js"
import {AuthenticationSystem} from "./AuthenticationSystem.js"

const director =  new Director("Rodrigo", 10000, 12345678900);
director.registerPassword("123456")
const manager =  new Manager("Ricardo",  5000, 12378945601);
manager.registerPassword("12345");

const client = new Client("Lais", 78945612379, "456");
const managerIsLogged = AuthenticationSystem.login(manager, "12345");
const directorIsLogged = AuthenticationSystem.login(director, "123456");


const clientIsLogged = AuthenticationSystem.login(client, "456");

console.log(managerIsLogged, directorIsLogged, clientIsLogged);