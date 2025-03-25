const inputNum = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Check if input number is valid
const validNum = (number) => {
    if (number === ''){
        output.textContent = 'Please enter a valid number';
        output.style.color = 'red';
    } else if (parseInt(number) <= -1) {
        output.textContent = 'Please enter a number greater than or equal to 1';
        output.style.color = 'red';
    } else if (parseInt(number) >= 4000) {
        output.textContent= 'Please enter a number less than or equal to 3999';
        output.style.color = 'red';
    } else {
        return true;
    }
    return false;
};

// Converts input number to a roman numeral using recursion
const numberToNumeral = (number) => {
    number = parseInt(number);
    if (number >= 1000){
        return 'M' + numberToNumeral(number - 1000);
    } else if (number >= 900){
        return 'CM' + numberToNumeral(number - 900); 
    } else if (number >= 500){
        return 'D' + numberToNumeral(number - 500); 
    } else if (number >= 400){
        return 'CD' + numberToNumeral(number - 400); 
    } else if (number >= 100){
        return 'C' + numberToNumeral(number - 100); 
    } else if (number >= 90){
        return 'XC' + numberToNumeral(number - 90); 
    } else if (number >= 50){
        return 'L' + numberToNumeral(number - 50);
    } else if (number >= 40){
        return 'XL' + numberToNumeral(number - 40); 
    } else if (number >= 10){
        return 'X' + numberToNumeral(number - 10); 
    } else if (number >= 9){
        return 'IX' + numberToNumeral(number - 9); 
    } else if (number >= 5){
        return 'V' + numberToNumeral(number - 5); 
    } else if (number >= 4){
        return 'IV' + numberToNumeral(number - 4); 
    } else if (number >= 1){
        return 'I' + numberToNumeral(number - 1); 
    } else {
        return '';
    }
}

// prints converted roman numeral to webpage
const printNumeral = (number) => {
    output.textContent = numberToNumeral(number);
    output.style.color = 'black';
}


// EVENT LISTENERS
inputNum.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        const valid = validNum(inputNum.value);
        if(valid) {
            printNumeral(inputNum.value);
        }  
    }
});

convertBtn.addEventListener('click', () => {
    const valid = validNum(inputNum.value);
    if(valid) {
        printNumeral(inputNum.value);
    }
});