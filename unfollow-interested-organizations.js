/**
How to unfollow all the companies.

1. Open the link in the browser
https://www.linkedin.com/in/YOUR_NAME/detail/recent-activity/interests/companies
Replace YOUR_NAME with your Linkedin name.

2. Find the div id
We need to find the div id where the companies unfollow button are displayed.
For that open your code inspector with `CTRL+SHIFT+i` (Firefox).
Get the id of the div just below this div:
`<div class="global-title-container shared-title-bar"> <div class="global-title"><h1 class="global-title-text">Companies</h1></div></div>`

<div id="ember110" class="entity-list-wrapper ember-view"> </div>

The id we need is `ember110`. Your id will be different.

3. Change your id
`var div = document.getElementById("ember110");`

Note on condition - `var buttonAtDiv = i%2 == 0 ? 5:4;`
It seems that for every odd and even divs, button is rendered based on that condition.

4. Copy paste the code in the `console`.

**/

  var div = document.getElementById("ember110"); 
var li =  div.getElementsByTagName("li"); 

for (var i = 0; i < li.length+1; i++) {
  var idiv =  li[i].getElementsByTagName('div');  
 	var buttonAtDiv = i%2 == 0 ? 5:4;
 
  var button =  idiv[buttonAtDiv].getElementsByTagName('button');
  var btnID = button[0].id;
  
  if (button[0].innerText == "Following") { 
    $('#'+btnID).click();
  }
}
