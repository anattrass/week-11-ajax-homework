
var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
};

var populateList = function(object){
  var select = document.querySelector("#album-list");
  console.log(object.albums.items);

  object.albums.items.forEach(function(album){

    var option = document.createElement("option");
    option.innerText = album.name;
    select.appendChild(option);
  });
};

var requestComplete = function(){
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  object = JSON.parse(jsonString);

  populateList(object);
};

var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
  makeRequest(url, requestComplete);
}

window.onload = app;