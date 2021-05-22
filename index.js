// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (init = '*') => {
    return function(adjective = "special"){
        return `You are ${init}${adjective}${init}!`;
    }
}

const Calculator = {
    add: (num1, num2) => {
        return num1 + num2;
    }, 
    subtract: (num1, num2) => {
        return num1 - num2;
    }, 
    multiply: (num1, num2) => {
        return num1 * num2;
    }, 
    divide: (num1, num2) => {
        return num1 / num2;
    }
}

const actionApplyer = (startingInt, arr) => {
    if (arr.length == 0) {
        return startingInt;
    } else {
        return undefined
    }
}

