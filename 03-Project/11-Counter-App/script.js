const counterEle = document.querySelector("#counter");

function decrement() {
    let val = parseInt(counterEle.innerText);
    val -= 1;
    counterEle.innerText = val;
}

function increment() {
    counterEle.innerText = parseInt(counterEle.innerText) + 1;
}
