function addItem() {
  var text = document.getElementById("tf").value;

  var list = document.getElementById("list");

  var button = document.createElement("button");
  button.innerHTML = "X";
  button.onclick = function() {deleteItem(this.parentNode)};

  var node = document.createElement("li");
  node.innerHTML = text;

  node.appendChild(button)
  list.appendChild(node);

  console.log(text);
}


function deleteItem(item){
  console.log(item);

  var list = document.getElementById("list");
    list.removeChild(item);
}
