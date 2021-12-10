/**

Unfollow companies https://www.linkedin.com/feed/following/?filterType=company

**/

var main = document.getElementById("main").getElementsByTagName("ul"); 
var liArray = main[1].getElementsByTagName("li");

window.scrollBy(0, -1000);

for(var i=0; i < 1,374;i++) {
  
	var button = liArray[i].getElementsByTagName('button');
  
  if (button[0].innerText == "Following") { 
  	button[0].click();
  }
}
