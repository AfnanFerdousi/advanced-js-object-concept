const tania = {
    isRich: false,
    name: 'tania',
    major: 'ACCA',
    balance: 5000,
    treatFriend: function (expense) {
        console.log(this);
        this.balance = this.balance - expense;
        return this.balance;
    }    
}

const tia = {
    name: 'tia',
    major: 'Economics',
    balance: 7000,  
}


const tiaTreat = tania.treatFriend.bind(tia);
tiaTreat(500)