// original source
function original(){
    var enterButton = document.getElementById("enter");
    var input = document.getElementById("userInput");
    var ul = document.querySelector("ul");
    var item = document.getElementsByTagName("li");
    
    function inputLength(){
        return input.value.length;
    } 
    
    function listLength(){
        return item.length;
    }
    
    function createListElement() {
        var li = document.createElement("li"); // creates an element "li"
        li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
        ul.appendChild(li); //adds li to ul
        input.value = ""; //Reset text input field
    
    
        //START STRIKETHROUGH
        // because it's in the function, it only adds it for new items
        function crossOut() {
            li.classList.toggle("done");
        }
    
        li.addEventListener("click",crossOut);
        //END STRIKETHROUGH
    
    
        // START ADD DELETE BUTTON
        var dBtn = document.createElement("button");
        dBtn.appendChild(document.createTextNode("X"));
        li.appendChild(dBtn);
        dBtn.addEventListener("click", deleteListItem);
        // END ADD DELETE BUTTON
    
    
        //ADD CLASS DELETE (DISPLAY: NONE)
        function deleteListItem(){
            li.classList.add("delete")
        }
        //END ADD CLASS DELETE
    }
    
    
    function addListAfterClick(){
        if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
            createListElement();
        }
    }
    
    function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
            //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
            createListElement();
        } 
    }
    
    enterButton.addEventListener("click",addListAfterClick);
    
    input.addEventListener("keypress", addListAfterKeypress);
}

function makeTodoList() {
    let enterButtons = document.querySelectorAll(".enter");
    let inputs = document.querySelectorAll(".userInput");
    let uls = document.querySelectorAll("ul");
    let items = document.getElementsByTagName("li");

    function inputLength(currentInput) {
        return currentInput.value.length;
    }

    function listLength(currentItem) {
        return currentItem.length;
    }

    function createListElement(currentInput, currentUl) {
      let li = document.createElement("li"); // creates an element "li"
      li.appendChild(document.createTextNode(currentInput.value)); // makes text from input field the li text
      currentUl.appendChild(li); // adds li to ul
      currentInput.value = ""; // Reset text input field

        // START STRIKETHROUGH
        // because it's in the function, it only adds it for new items
        function crossOut() {
            li.classList.toggle("done");
        }

        li.addEventListener("click", crossOut);
        // END STRIKETHROUGH

        // START ADD DELETE BUTTON
        let dBtn = document.createElement("button");
        dBtn.innerHTML = `<span class="material-symbols-outlined">close</span>`;
        li.appendChild(dBtn);
        dBtn.addEventListener("click", deleteListItem);
        // END ADD DELETE BUTTON

        // ADD CLASS DELETE (DISPLAY: NONE => remove)
        function deleteListItem() {
            li.parentNode.removeChild(li);
        }      
    }

    function addListAfterClick(currentInput, currentUl) {
        if (inputLength(currentInput) > 0) {
            createListElement(currentInput, currentUl);
        }
    }

    function addListAfterKeypress(event, currentInput, currentUl) {
        if (inputLength(currentInput) > 0 && event.which === 13) {
            createListElement(currentInput, currentUl);
        }
    }

    enterButtons.forEach(function (enterButton, index) {
        let currentInput = inputs[index];
        let currentUl = uls[index];
        
        enterButton.addEventListener("click", function () {
            addListAfterClick(currentInput, currentUl);                       
        });

        currentInput.addEventListener("keypress", function (event) {
            addListAfterKeypress(event, currentInput, currentUl);            
        });
    });
}

makeTodoList();
