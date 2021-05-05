const form = document.getElementById( "form-cart")
const itemContainer=document .getElementById("item-container")



//submit hander or function
function addItem(e) {
 e.preventDefault();
 let li = document.createElement("li")
 li.textContent = form.item_name.value;
 itemContainer.appendChild(li);

}

addEventListener( "submit" ,addItem);

