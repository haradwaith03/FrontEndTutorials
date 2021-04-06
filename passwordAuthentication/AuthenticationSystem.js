/*
Ser autenticavel significa ter o método autenticar

ducky type
*/

export class AuthenticationSystem{
    static login(authentic, password){
        if(AuthenticationSystem.isAauthentic(authentic)){
            return authentic.authenticate(password);
        }
        return false;
    }

    static isAauthentic(authentic){
       return "authenticate" in authentic &&
       authentic.authenticate instanceof Function
    }
}