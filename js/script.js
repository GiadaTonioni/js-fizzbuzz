//definizione ciclo da 1 a 100

for (let i=1; i<=100; i++) {
    console.log (i)
    if (i % 15 === 0) {
        console.log (`${i}FizzBuzz`)
    }
    else if(i % 3 === 0) {
        console.log (`${i}Fizz`)
    }
    else if (i % 5 === 0) {
        console.log (`${i}Buzz`)
    }
}
