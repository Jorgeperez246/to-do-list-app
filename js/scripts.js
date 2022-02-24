function newItem() {
  // this is where I create a list item
  let li = $("<li></li>");
  let inputValue = $("#input").val();

  // this is the function to cross out an item
  li.append(inputValue);
  $("#list").append(li);

  function crossOut() {
    li.toggleClass("strike");
  }
  li.on("dblclick", crossOut);

  //added delete button here
  let crossOutButton = $("<crossOutButton></crossOutButton>");
  createTextNode = document.createTextNode("X");
  crossOutButton.append(createTextNode);
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete");
  }

  crossOutButton.on("click", deleteListItem);

  $("#list").sortable();
}
