/**

Unfollow companies https://www.linkedin.com/feed/following/?filterType=company

Copy paste the code in the `console`.

Recommendation API: https://www.linkedin.com/voyager/api/feed/richRecommendedEntities?count=20&q=unfollowHubRecommendations&start=240&type=COMPANY

First run load company and then delete company.

**/

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function loadCompany() {
  for (let i = 1; i <= 100; i++) {
    await sleep(2000);
    window.scrollBy(0, 10000);
  }
}

function deleteCompany() {
  var main = document.getElementById("main").getElementsByTagName("ul");
  var liArray = main[1].getElementsByTagName("li");

  for (var i = 0; i < 1, 374; i++) {

    var button = liArray[i].getElementsByTagName('button');

    if (button[0].innerText == "Following") {
      button[0].click();
    }
  }
  window.location.reload();
}

// loadCompany();
// deleteCompany();
