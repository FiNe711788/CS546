const questionOne = function questionOne(arr){
	let result = 0;
    for (let i = 0; i < arr.length; i++)
    	result += arr[i] * arr[i];
    return result;
}

const questionTwo = function questionTwo(num) { 
    if (num <= 0)
        return 0;
    else if (num === 1)
        return 1;
    else
        return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'A'
         || text[i] === 'e' || text[i] === 'E'
         || text[i] === 'i' || text[i] === 'I'
         || text[i] === 'o' || text[i] === 'O'
         || text[i] === 'u' || text[i] === 'U')
         count++;
    }
    return count;
}

const questionFour = function questionFour(num) {
    if (num <= 0)
        return NaN;
    else if (num === 0)
        return 0;
    else {
        let result = 1;
        for (let i = 1; i <= num; i++)
            result *= i;
        return result;
    }
}

module.exports = {
    firstName: "FANYU", 
    lastName: "WANG", 
    studentId: "10427157",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};