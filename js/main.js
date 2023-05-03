

$("#dog-button").on("click", function() {

    // emptying current dog gif
    $("#images").html("");

// Storing our giphy API URL for a random dog image

let queryUrl = "https://api.giphy.com/v1/gifs/random?api_key=VVJGxoGGiXTe23pXkNkLgloVVofxs3Dt&tag=dog&rating=pg";


  // Perfoming an AJAX GET request to our queryURL
  $.ajax({
    url: queryUrl,
    method: "GET"
  })

      // After the data from the AJAX request comes back
      .then(function(response) {
         // Saving the image_original_url property
         var imageUrl = response.data.images.downsized.url;

          // Creating and storing an image tag
          var dogImage = $("<img>");

          // Setting the catImage src attribute to imageUrl
          dogImage.attr("src", imageUrl);
          dogImage.attr("alt", "dog image");

          // Prepending the catImage to the images div
          $("#images").prepend(dogImage);
        });
    });
