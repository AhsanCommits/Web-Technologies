// Write a JavaScript program to remove items from a drop - down list.

// get the select element by its ID
const select = document.getElementById("my-select");

// get the button element by its ID
const button = document.getElementById("my-button");

// add an event listener to the button
button.addEventListener("click", () => {
    // remove the selected item from the select element
    select.remove(select.selectedIndex);
    // set the alert message
    alert("Item removed!");
});

