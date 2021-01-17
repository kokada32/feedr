
var url = "http://newsapi.org";
var apiKey = "d2b569b91d5940f4948a00876790367f";

function displayHeadlines (results) {
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
  $("#popUp").attr("class", "");
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp2 (results) {
  var firstArticle = results.articles[1];
  $("#popUp").attr("class", "");
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp3 (results) {
  var firstArticle = results.articles[2];
  $("#popUp").attr("class", "");
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp4 (results) {
  var firstArticle = results.articles[3];
  $("#popUp").attr("class", "");
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

$.get(
  `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
  function (results) {
    displayHeadlines(results);
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
