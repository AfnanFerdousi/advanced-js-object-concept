const student = {
    isRich: false,
    name: 'tania',
    major: 'ACCA',
    bankAcc: 200967723,
    balance: 5000,
    sub: ['english', 'math', 'science'],
    friend: {
        name: 'liza',
        major:'science',
    },
    takeExam: function () {
        console.log(this.name, 'take exam');
    },
    treatFriend: function (expense,tip) {
        this.balance = this.balance - expense - tip;
        return this.balance;
    }    
}

student.takeExam();
const remain = student.treatFriend(700,100);
const remain2 = student.treatFriend(1700,200);
console.log(remain2);