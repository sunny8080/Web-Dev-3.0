{
    /*
document.addEventListener("click", function () {
    console.log("I have clicked on the document");
});

// in this way, event listener won't remove, becoz here strict equality (===) is used to check two fun are same or not
document.removeEventListener("click", function () {
    console.log("I have clicked on the document");
});
*/
    /*
        function print() {
            console.log("I have clicked on the document");
        }
        document.addEventListener("click", print);

        // // to remove event listener
        // document.removeEventListener("click", print);
    */
}

{
    /*
    // event object
    document.querySelector(".abc").addEventListener("click", function (event) {
        console.log(event);
    });
    */
}

{
    /*
    // preventDefault()
    document.querySelectorAll(".alink")[1].addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Defualt prevented");
    });
    */
}

{
    // Avoid too many events
    /*
    let myDiv = document.createElement("div");

    function paraStatus(event) {
        console.log("Para " + event.target.textContent);
    }
    // // to avoid creating new event each time, we added event to div
    // myDiv.addEventListener("click", paraStatus);
    
    for (let i = 1; i <= 100; i++) {
        let newElement = document.createElement("p");
        newElement.textContent = "This is para " + i;

        // to avoid creating new event each time, we defined a callback fun and added same to each element 
        newElement.addEventListener("click", paraStatus);
        myDiv.appendChild(newElement);
    }
    document.body.appendChild(myDiv);

    */
}

{
    // Execute event only on selected element
    let element = document.querySelector("#wrapper");

    element.addEventListener("click", function (event) {
        // in this way if function will execute only when span is clicked
        if (event.target.nodeName === "SPAN") {
            console.log("span pr click kia hai" + event.target.textContent);
        }
    });
}
