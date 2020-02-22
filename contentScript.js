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
function refineDues() {
  panels = document.getElementsByClassName("panel-title");
  for (i = 0; i < panels.length; i++) {
    if (panels[i].innerText == "Upcoming Due Dates") {
      ddls = panels[i].parentElement.parentElement.getElementsByTagName("a");
      for (j = 0; j < ddls.length; j++) {
        course = ddls[j].href.substr(32);
        course = course.substr(0, course.indexOf("/"));
        ddls[j].innerHTML += "<span class=\"label\">" + course + "</span>"
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  dumpBookmarks();
  if (window.location.href == "https://webcms3.cse.unsw.edu.au/")
    refineDues();
});
