(()=>{
    //stub
    console.log("fired!");
    
    let headline = document.querySelector("h1"),
        subhead = document.querySelector("h3");
        theButton = document.querySelector("button")
    
    //functions in the middle (what do you want to have happen)
    function changeText(){
        headline.textContent = "Now I'm different!";
        subhead.textContent = "hey me too. but that's ok."
    }
    
    //function calls / event handling at the bottom
    
    theButton.addEventListener("click", changeText);
})();