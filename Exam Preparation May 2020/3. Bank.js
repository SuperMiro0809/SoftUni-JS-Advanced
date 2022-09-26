function solve() {
    class Bank {    
        constructor(bankName) { 
            this._bankName = bankName; 
            this.allCustomers = [];
        }
  
        newCustomer (customer) {
            let isTrue = false;

            if(typeof customer === 'object') {
            this.allCustomers.forEach(cus => {
                if(cus.firstName === customer.firstName && cus.lastName === customer.lastName) {
                    isTrue = true;
                }
            })
            if(isTrue === true) {
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
            }else {
                customer.totalMoney = 0;
                customer.transaction = [];
                this.allCustomers.push(customer);
                return customer;
            }
        }
        }

        depositMoney (personalId, amount) {
            let obj = this.checkId(personalId);
            let isTrue = obj.isTrue;
            let objFromId = obj.objFromId;
            
            if(isTrue) {
                objFromId.totalMoney += amount;

                this.checkTransaction(objFromId, amount, 'made deposit of');
                
                return objFromId.totalMoney + '$';
            }else {
                throw new Error('We have no customer with this ID!');
            }
        }

        withdrawMoney (personalId, amount) {
            let obj = this.checkId(personalId);
            let isTrue = obj.isTrue;
            let objFromId = obj.objFromId;

            if(isTrue) {
                if(objFromId.totalMoney >= amount) {
                    objFromId.totalMoney -= amount;

                    this.checkTransaction(objFromId, amount, 'withdrew')
                    return objFromId.totalMoney + '$';
                }else {
                    throw new Error(`${objFromId.firstName} ${objFromId.lastName} does not have enough money to withdraw that amount!`);
                }
            }else {
                throw new Error('We have no customer with this ID!');
            }
        }

        customerInfo (personalId) {
            let obj = this.checkId(personalId);
            let isTrue = obj.isTrue;
            let objFromId = obj.objFromId;

            if(isTrue === false) {
                throw new Error('We have no customer with this ID!');
            }else {
                let result = `Bank name: ${this._bankName}\nCustomer name: ${objFromId.firstName} ${objFromId.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${objFromId.totalMoney}$`;

                if(objFromId.transaction.length > 0) {
                    result += '\nTransactions:\n';
                    for(let i = objFromId.transaction.length - 1; i >= 0; i--) {
                        if(i === 0) {
                            result += `${i+1}. ${objFromId.transaction[i]}`;
                        }else {
                            result += `${i+1}. ${objFromId.transaction[i]}\n`;
                        }
                    }
            }

                return result;
            }
        }


        checkId(id) {
            let isTrue = false;
            let objFromId = {};
            this.allCustomers.forEach(cus => {
                if(cus.personalId === id) {
                    isTrue = true;
                    objFromId = cus;
                }
            });

            return {
                isTrue,
                objFromId
            }
        }

        checkTransaction(objFromId, amount, type) {
                let transactionInfo = `${objFromId.firstName} ${objFromId.lastName} ${type} ${amount}$!`;
                objFromId.transaction.push(transactionInfo);
            

            return objFromId;
        }
    }
   
    let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

}

solve();


//'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!' 
//'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov withdrew 250$!\n1. Svetlin Nakov withdrew 250$!'

//  'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit of 250$!\n1. Svetlin Nakov made deposit of 250$!' 
//  'Bank name: SoftUni Bank\nCustomer name: Svetlin Nakov\nCustomer ID: 1111111\nTotal Money: 375$\nTransactions:\n3. Svetlin Nakov withdrew 125$!\n2. Svetlin Nakov made deposit 250$!\n1. Svetlin Nakov made deposit 250$!'