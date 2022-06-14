console.log("08");
const promise = fetch('http');
console.log(promise);

promise.then(res=> {
    console.log(res);
    const textPromise = res.text();
    console.log(textPromise);

    textPromise.then(data => console.log('data : ', data))
})

function calllback(data) {
    console.log('callback : ',data);
}