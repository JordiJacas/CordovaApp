var count = 0;

function addItem() {
  var text = $("#tf").val();

  /*var list = $("#list");

  var button = ("<button type='button' onclick='deleteItem(this.parentNode)'>Delete</button>");

  var node = ("<li> "+ text + button + "</li>");

  list.append(node);*/

  localStorage.setItem(count, text);
  count++;

  updateList();
}

function deleteItem(item){
  //item.remove();

  localStorage.removeItem(localStorage.key(item));

  updateList();
}

function updateList(){
  $('li').remove();
  for (var i = 0; i < localStorage.length; i++){
    count++;
    var list = $("#list");

    var button = ("<button type='button' onclick='deleteItem("+i+")'>Delete</button>");

    var node = ("<li> "+ localStorage.getItem(localStorage.key(i)) + button + "</li>");

    list.append(node);

    console.log(localStorage.getItem(localStorage.key(i)));
  }
}

$(document).ready(function(){updateList()});
