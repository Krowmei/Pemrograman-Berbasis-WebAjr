const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+':
            return numbers.reduce((acc, num) => acc + num, 0);
        case '-':
            return numbers.reduce((acc, num) => acc - num);
        case '*':
            return numbers.reduce((acc, num) => acc * num, 1);
        case '/':
            return numbers.reduce((acc, num) => acc / num);
        case '%':
            return numbers.reduce((acc, num) => acc % num);
        default:
            return 'Operator tidak valid! Gunakan +, -, *, /, atau %';
    }
};


console.log(calculator('+', 14, 2, 3, 4)); 
console.log(calculator('-', 10, 2, 1));    
console.log(calculator('*', 2, 3, 4));     
console.log(calculator('/', 40, 2, 2));    
console.log(calculator('%', 20, 2));       