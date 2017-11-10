//Global variables
// // var searchTerm = "";
// var desiredResults = 0;
// var beginYear = 0;
// var endYear = 0;

$("#SearchButton").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    var searchTerm = $("#search").val();
    var numberOfArticles = $("#records").val();
    var startYear = $("#startYear").val();
    var finalYear = $("#endYear").val()+"1230";
    console.log(searchTerm);
    // Constructing a URL to search Giphy for the name of the person who said the quote
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api_key=3bf299a94b56460daec4edb416a071ad";


    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
            // Storing an array of results in the results variable
            var searchResults = response;
            console.log(searchResults);

            // Looping over every result item
            for (var i = 0; i < searchResults.length; i++) {
                // contains a div for the users search resuls
                var resultDiv = $("<div class='userResults'>");
                resultDiv.appendTo("#results");
            }

        });
    //Clear Function for the #ClearButton//
    // function clear = {

    // }
    //Clear Results Button//
    $("#ClearButton").on("click", function() {
        clear();
    });

});
