//Abstract class
export class Account{
    constructor(initialBalance, client, agency) {
        if(this.constructor == Account){
            throw new Error(" You are not allowed to instanciate an object of type Accoun directly because this is an abstract class");
        }

        this._balance = initialBalance;
        this.client = client;
        this.agency = agency;
    }

    set client(newValue) {
        if (newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    //Abstract method
    withdraw(value) {
       throw new Error("Withdraw method is abstract")
    }

    _withdraw(value, fee){
        const withdrawnAmount = fee * value;
        if (this._balance >= withdrawnAmount) {
            this._balance -= withdrawnAmount;
            return withdrawnAmount;
        }

        return 0;
    }

    deposit(value) {
        this._balance += value;
    }

    tranfer(value, account) {
        const withdrawnAmount = this.withdraw(value);
        conta.depositar(withdrawnAmount);
    }
}