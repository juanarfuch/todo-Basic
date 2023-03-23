let enterButton = document.getElementById("enter")
let textInput = document.getElementById("userinput")
let ul = document.querySelector("ul")
let test = document.getElementById("test")




function toggleDone(e){
	let listItem =  e.target;
	listItem.classList.toggle("done")
}


function deleteItem(e){
	let delButton = e.target
	let padre = delButton.parentElement;
	padre.parentNode.removeChild(padre);
}



function inputLength(){
	return textInput.value.length
}



function createDiv(){
	let div = document.createElement("div");
	div.classList.add("list-cont")
	return div
}

function createLi(){
	let li = document.createElement("li");
	li.classList.add("list-item")
	li.textContent = textInput.value;
	textInput.value=""
	return li
}

function createButton(){
	let button = document.createElement("button")
	button.classList.add("deletB")
	button.textContent = "Delete"
	return button
}

function createTodo(){
	let div = createDiv();
	let li = createLi();
	let button = createButton();
	ul.appendChild(div)
	div.append(li, button)
	console.log(ul)
}



function addListAfterCLick(){
	if(inputLength()>0){
		createTodo()
	}
}

function addListAfterEnter(e){
	if(inputLength()  >0 && e.keyCode ===13){
		createTodo();
	}
}


function managingList(e){
	let target = e.target
	if(target.classList.contains("deletB")){
		deleteItem(e)
	}else if (target.classList.contains("list-item")){
		toggleDone(e)}
	}
enterButton.addEventListener("click",addListAfterCLick);

textInput.addEventListener("keypress",addListAfterEnter);

ul.addEventListener("click",managingList )
