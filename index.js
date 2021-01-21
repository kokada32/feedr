
var url = "http://newsapi.org";
var apiKey = "d2b569b91d5940f4948a00876790367f";
var apiData = [];
var urlWeather = "https://www.metaweather.com/api/location";
var apiWeatherData = [];

$("#sourceName").text("Los Angeles"); 
$("#firstSource").text("Los Angeles");
$("#secondSource").text("New York");

function displayNewsAPI () {
  var firstArticle = apiData.articles[0];
  $("#article1").text(firstArticle.title);
  $("#article1Img").attr("src", firstArticle.urlToImage);
  $("#description1").text(firstArticle.description);

  var secondArticle = apiData.articles[1];
  $("#article2").text(secondArticle.title);
  $("#article2Img").attr("src", secondArticle.urlToImage);
  $("#description2").text(secondArticle.description);

  var thirdArticle = apiData.articles[2];
  $("#article3").text(thirdArticle.title);
  $("#article3Img").attr("src", thirdArticle.urlToImage);
  $("#description3").text(thirdArticle.description);

  var fourthArticle = apiData.articles[3];
  $("#article4").text(fourthArticle.title);
  $("#article4Img").attr("src", fourthArticle.urlToImage);
  $("#description4").text(fourthArticle.description);
}

function displayPopUp1 () {
  var firstArticle = apiData.articles[0];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp2 () {
  var firstArticle = apiData.articles[1];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp3 () {
  var firstArticle = apiData.articles[2];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayPopUp4 () {
  var firstArticle = apiData.articles[3];
  $("#popUp").toggleClass();
  $("#popUpTitle").text(firstArticle.title);
  $("#popUpContent").text(firstArticle.content);
  $("#popUpURL").attr("href", firstArticle.url);
}

function displayWeather () {
  var weather = apiWeatherData.consolidated_weather[0];
  $("#weatherTitle").text(apiWeatherData.title);
  $("#weatherTemp").text(Math.round((weather.the_temp * 9/5) + 32) + " degrees");
  $("#weatherState").text(weather.weather_state_name);
  $("#weatherTitle").css("text-align", "center");
  $("#weatherTitle").css("width", "100%");
  $("#weatherTitle").css("font-size", "30px");
  $("#weatherTemp").css("width", "100%");
  $("#weatherTemp").css("font-size", "20px");
  $("#weatherTemp").css("text-align", "right");
  $("#weatherState").css("font-size", "20px");
  $("#weatherTemp").css("position", "unset");
  $("#weatherState").css("position", "unset");
}

$.get(
  `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/everything?q=Los+Angeles&apiKey=${apiKey}`,
  function (results) {
    apiData = results;
    pageSource = "LA";
    console.log(apiData);
    displayNewsAPI();
  }
);

$.get (
  `https://accesscontrolalloworiginall.herokuapp.com/${urlWeather}/2442047`,
  function (results) {
    apiWeatherData = results;
    console.log(results);
    displayWeather();
  }
);

$("#article1").on("click", () => {
  displayPopUp1();
});

$("#article2").on("click", () => {
  displayPopUp2();
});

$("#article3").on("click", () => {
  displayPopUp3();
});

$("#article4").on("click", () => {
  displayPopUp4();
});

$("#closePopUp").on("click", function () {
    $("#popUp").attr("class", "loader hidden");
});

$("#firstSource").on("click", () => {
  if (pageSource === 'LA') {
    console.log('already on LA source');
  } else {
    $.get(
    `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/everything?q=Los+Angeles&apiKey=${apiKey}`,
    function (results) {
      apiData = results;
      pageSource = "LA"
      displayNewsAPI(apiData);
      $("#sourceName").text("Los Angeles")
      }
    );

    $.get (
      `https://accesscontrolalloworiginall.herokuapp.com/${urlWeather}/2442047`,
      function (results) {
        apiWeatherData = results;
        displayWeather();
      }
    );
  }
});

$("#secondSource").on("click", function () {
  if (pageSource === 'NY'){
    console.log('already on NY source');
  } else {
    $.get(
      `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/everything?q=New+York&apiKey=${apiKey}`,
      function (results) {
        apiData = results;
        pageSource = "NY";
        displayNewsAPI(apiData);
        $("#sourceName").text("New York");
      }
    );

    $.get (
      `https://accesscontrolalloworiginall.herokuapp.com/${urlWeather}/2459115`,
      function (results) {
        apiWeatherData = results;
        displayWeather();
      }
    );
  }
});




