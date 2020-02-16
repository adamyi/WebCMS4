function dumpBookmarks() {
  chrome.runtime.sendMessage({action : "get-bookmarks"}, function(response) {
    var navbar = document.getElementsByClassName("navbar-nav")[0];
    for (var i = 0; i < response.length; i++) {
      console.log(response[i]);
      navbar.innerHTML += "<li><a href=\"" + response[i].url + "\">" +
                          response[i].title + "</a></li>";
    }
  });
}
// dumpBookmarks();
document.addEventListener('DOMContentLoaded', function() { dumpBookmarks(); });
