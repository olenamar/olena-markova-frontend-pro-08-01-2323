const number = '54321';

function numberRev(user) {
let userSplit = user.split('');
let userRevers = userSplit.reverse();
let userJoin = userRevers.join('');
return userJoin
}
console.log(numberRev(number));