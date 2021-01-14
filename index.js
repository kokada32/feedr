
var url = "http://newsapi.org";
var apiKey = "d2b569b91d5940f4948a00876790367f";

$.get(
    `https://accesscontrolalloworiginall.herokuapp.com/${url}/v2/top-headlines?country=us&apiKey=${apiKey}`,
    function (results) {
      console.log(results);
      displayHeadlines(results);
      return results
    }
  );

  
  function displayHeadlines (results) {
      var firstArticle = results.articles[0];
      $("#article1").text(firstArticle.title);
    // $("#article1").attr("href", firstArticle.url);
    $("#article1Img").attr("src", firstArticle.urlToImage);
    $("#description1").text(firstArticle.description);

    var secondArticle = results.articles[1];
    $("#article2").text(secondArticle.title);
    $("#article2").attr("href", secondArticle.url);
    $("#article2Img").attr("src", secondArticle.urlToImage);
    $("#description2").text(secondArticle.description);

    var thirdArticle = results.articles[2];
    $("#article3").text(thirdArticle.title);
    $("#article3").attr("href", thirdArticle.url);
    $("#article3Img").attr("src", thirdArticle.urlToImage);
    $("#description3").text(thirdArticle.description);
    var fourthArticle = results.articles[3];

    $("#article4").text(fourthArticle.title);
    $("#article4").attr("href", fourthArticle.url);
    $("#article4Img").attr("src", fourthArticle.urlToImage);
    $("#description4").text(fourthArticle.description);
}

$("#article1").on("click", function (results) {
    var firstArticle = results.articles[0];
    $("#popUp").attr("class", "loader");
    $("#popUpTitle").text(firstArticle.title);
    $("#popUpContent").text(firstArticle.content);
    $("#popUpURL").attr("src", firstArticle.url);
});

$("#closePopUp").on("click", function () {
    $("#popUp").attr("class", "loader hidden");
})