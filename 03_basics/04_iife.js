//Immediately Invloked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()

(function chai(){
    //named iifi
    console.log(`DB Connected`);
})();

// semicolen after iifi is must !!!
(() => {
    console.log(`DB Connected again`);
})();

((name) => {
    console.log(`Hello, ${name}`);
})('Ekansh')