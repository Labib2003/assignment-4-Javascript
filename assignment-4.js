//problem 1
function anaToVori(ana) {
    //checking for invalid inputs
    if (ana < 0 || typeof (ana) != 'number') {
        return 'Please give a valid input';
    }
    //main code
    else {
        let vori = ana / 16;
        return vori;
    }
}

//testing anaToVori
/* console.log(anaToVori(32));
console.log(typeof(anaToVori(32))); */

//problem 2
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    //declaring the single prices
    const singleSingaraPrice = 7;
    const singleSomuchaPrice = 10;
    const singleJilapiPrice = 15;
    //checking for invalid inputs
    if (singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0) {
        return 'Invalid input (please give a possitive quantity';
    }
    //main code
    else {
        var total = (singaraQuantity * singleSingaraPrice) + (somuchaQuantity * singleSomuchaPrice) + (jilapiQuantity * singleJilapiPrice);
        return total;
    }

}

//testing pandaCost
/* console.log(pandaCost(2,5,7));
console.log(typeof(pandaCost(2,5,7))); */

//problem 3
function picnicBudget(guests) {
    //declaring cost
    const perHeadCost0To100 = 5000;
    const perHeadCost101To200 = 4000;
    const perHeadCost201ToRest = 3000;
    //checking for invalid input
    if (guests < 0) {
        return 'Invalid input. Please give a positive input.';
    }
    else if (guests > 500) {
        return 'Sorry, we dont have space for so mamy guests.';
    }
    //main code
    else {
        //calculation for less than or equal to 100 guests
        if (guests <= 100) {
            var totalCost = guests * perHeadCost0To100;
            return totalCost;
        }
        //calculation for less than or equal to 200 guests
        else if (guests <= 200) {
            var totalCost = (100 * perHeadCost0To100) + ((guests - 100) * perHeadCost101To200);
            return totalCost;
        }
        //calculation for above 200 guests
        else {
            var totalCost = (100 * perHeadCost0To100) + (100 * perHeadCost101To200) + ((guests - 200) * perHeadCost201ToRest);
            return totalCost;
        }
    }
}

//testing picnicBudget
/* console.log(picnicBudget(400));
console.log(typeof(picnicBudget(400))); */

// problem 4
function oddFriend(friends) {
    //checking for invalid input
    if (typeof(friends)!='object'){
        return 'Please enter an array.';
    }
    else{
        for (let i = 0; i < friends.length; i++) {
            let nameLength = friends[i].length;
            if (nameLength % 2 != 0) {
                return friends[i];
            }
            /* else{
                return 'No odd friends found.';
            } */
        }
    }
}

// testing oddFriend
/* const singers = ["abcd", "abcde", "abc"];

console.log(oddFriend(singers));
console.log(typeof(oddFriend(singers))); */