
function addItem() {
  var text = $("#tf").val();

  var list = $("#list");

  var button = ("<button type='button' onclick='deleteItem(this.parentNode)'>Delete</button>");

  var node = ("<li> "+ text + button + "</li>");

  list.append(node);
}

function deleteItem(item){
  item.remove();
}
