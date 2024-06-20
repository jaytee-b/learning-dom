////Dom SELCTORS

//querySelector(): this method returns the first element within the document that matches the specified selector. the specified selector here is the "li"
const list = document.querySelector("li");
console.log(list);

//getElementById():This method returns the first element whose id matches the specified string. the id is specified in the html as #second. Only the first element with an id of #second is selected
const secondList = document.getElementById("second")
console.log(secondList);

//querySelectorAll(): returns a static node list representing a list of all the elements that matches the specified selector. 
const allList = document.querySelectorAll("li")
console.log(allList);


//getElementsByClassName: this returns an array of all child elements elements with this class name
const classList = document.getElementsByClassName("list-name")
console.log(classList);


//getElementsByTagName(): this returns all elements that have the same tagname
const tagName = document.getElementsByTagName("h3")
console.log(tagName);



//DOM ATTRIBUTES

//getAttribute(): step 1: use the getElementsById() selector to get the element
const header = document.getElementById("dom2");

//use the getAttribute() and select the name of the attribute you want to get as a string. 
//console log and check for the result in your browser's terminal.
const headerAttribute = header.getAttribute("class");
console.log(headerAttribute);



//setAttribute()>>takes two values in the parameter. the state of the element and the boolean,true/false
const button = document.getElementById("btn");
//here youre setting the attribute so you dont need to assign the below to a variable 
// button.setAttribute("disabled","true")



//removeAttribute()>> it is used to remove an attribute from a particular element
const button2 =document.getElementById("btn");
button2.removeAttribute("class")
//here the class attribute was removed from this element
console.log(button2);


///DOM MANIPULATION
//Styling the dom
const paragraph = document.querySelector("p");
paragraph.style.fontSize= "60px"
paragraph.style.color = "tomato"


// creating a new paragraph element
const newParagraph = document.createElement("p");

// creating a text node
const paragraphContent = document.createTextNode("This is a new paragraph")

// adding the text node to the newly created paragraph
newParagraph.appendChild(paragraphContent)

//adding the newly created element and its content into the dom

const maintag =  document.getElementById("main");
document.body.appendChild(newParagraph,maintag)

// const inner = document.getElementById("inner").innerHTML
// console.log(inner);

const inner2 = document.getElementById("inner")
inner2.innerHTML= "<p>testing inner html</p>"

// const button3 = document.getElementById("btn");
function handleClick(){
    return alert("I have been clicked")
}

// button3.addEventListener("click",handleClick)

// button3.onclick = handleClick


function handleSubmit(e){
    e.preventDefault()
    const fullName = document.loginform.fn.value
    const pwd = document.loginform.pwd.value

    if(fullName.length == 0){
        return alert ("Full name is required")
    }
    if (pwd.length < 5){
        return alert ("password should be more than 5 characters")
    }
    console.log(fullName,pwd);

}

