import { Account } from "./Account.js";

export class CheckingAccount extends Account{
    static numberOfAccounts = 0;
    constructor(client, agency) {
        super(0,client, agency);
        CheckingAccount.numberOfAccounts += 1;
    }
    
    //overwriting withdraw behaviour
    withdraw(value) {
        let fee = 1.1;
        return this._withdraw(value, fee);
    }
}