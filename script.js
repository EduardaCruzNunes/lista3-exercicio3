var A = [];
var X = 0;
var M = [];

while(A.length < 5){
        X = prompt('Digite um número:');
        A.push(X);
        console.log(X);
} 

X = prompt('Digite mais um número:');
console.log('Multiplicado por:' , X);

for (var i = 0; i < A.length; i++) {
        M.push(A[i] * X);     
        console.log(M);
}