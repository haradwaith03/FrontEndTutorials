import { Account } from "./Account.js";

export class SavingAccount extends Account{
    constructor(initialBalance, client, agency) {
        super(initialBalance, client, agency);
    }

    withdraw(value){
        const fee = 1.02;
        return this._withdraw(value, fee);
    }
}