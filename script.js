// 1 - Select the section with an id of container without using querySelector.
console.log(document.getElementById("container"));

// 2 - Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));

// 3 - Select all of the list items with a class of "second".
console.log(document.querySelectorAll(".second"));

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
console.log(document.querySelector("ol li.third"));

// 5 - Give the section with an id of container the text "Hello!".
const newID = "Hello!";
console.log((document.getElementById("container").id = newID));

// 6 -  Add the class main to the div with a class of footer.
const footerDiv = document.querySelector("div.footer");
footerDiv.classList.add("main");

// 7 - Remove the class main on the div with a class of footer.
footerDiv.classList.remove("main");

// 8 -  Create a new li element.
let newLi = document.createElement("li");

// 9 - Give the li the text "four".
newLi.appendChild(document.createTextNode("four"));

// 10 - Append the li to the ul element.
document.querySelector("ul").appendChild(newLi);

// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green".
let list = document.querySelector("ol");
let item = list.getElementsByTagName("li");
for (let i = 0; i < item.length; ++i) {
  item[i].style.color = "green";
}

// 12 - Remove the div with a class of footer
footerDiv.parentNode.removeChild(footerDiv);
