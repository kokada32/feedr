
var url = "http://newsapi.org";
var apiKey = "d2b569b91d5940f4948a00876790367f";

$("#sourceName").text("News API"); 
$("#firstSource").text("News API");
$("#secondSource").text("NPR News");

function displayNewsAPI (results) {

  var firstArticle = results.articles[0];
  $("#article1").text(firstArticle.title);
  $("#article1Img").attr("src", firstArticle.urlToImage);
  $("#description1").text(firstArticle.description);

  var secondArticle = results.articles[1];
  $("#article2").text(secondArticle.title);
  $("#article2Img").attr("src", secondArticle.urlToImage);
  $("#description2").text(secondArticle.description);

  var thirdArticle = results.articles[2];
  $("#article3").text(thirdArticle.title);
  $("#article3Img").attr("src", thirdArticle.urlToImage);
  $("#description3").text(thirdArticle.description);

  var fourthArticle = results.articles[3];
  $("#article4").text(fourthArticle.title);
  $("#article4Img").attr("src", fourthArticle.urlToImage);
  $("#description4").text(fourthArticle.description);
}

function displayPopUp1 (results) {
  var firstArticle = results.articles[0];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp2 (results) {
  var firstArticle = results.articles[1];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp3 (results) {
  var firstArticle = results.articles[2];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp4 (results) {
  var firstArticle = results.articles[3];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

$.get(
  `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
  function (results) {
    console.log(results);
    displayNewsAPI(results);
  }
);

$("#article1").on("click", function () {
  $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
    function (results) {
      displayPopUp1(results);
    }
  );
});

$("#article2").on("click", function () {
  $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
    function (results) {
      displayPopUp2(results);
    }
  );
});

$("#article3").on("click", function () {
  $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
    function (results) {
      displayPopUp3(results);
    }
  );
});

$("#article4").on("click", function () {
  $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
    function (results) {
      displayPopUp4(results);
    }
  );
});

$("#closePopUp").on("click", function () {
    $("#popUp").attr("class", "loader hidden");
});

$("#firstSource").on("click", function () {
  $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
    function (results) {
      displayNewsAPI(results);
    }
  );
});

var urlNPR = "https://authorization.api.npr.org";

$("#secondSource").on("click", function () {
  $.post(
    `https://accesscontrolalloworiginall.herokuapp.com/${urlNPR}/v2/token`,
    {
      grant_type: "authorization_code",
      client_id: "nprone_trial_z6cZazWSSCxs",
      client_secret: "P6WY5vaFTz3mLMZhM7Ixyy1HkjG9ibptGYSPa4AB"
    },
    function (results) {
      console.log(results);
    }
  );
});

// $("#secondSource").on("click", function() {


// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "0d079c05a5mshdacb83be5656a0cp1e3bb7jsna972f414725c",
// 		"x-rapidapi-host": "community-hacker-news-v1.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// });