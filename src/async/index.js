const doSomethingAsync = (tiempo) => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Do something Async'), tiempo)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync(4500);
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync(3500);
        console.log(something);
    }catch (error) {
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After');

