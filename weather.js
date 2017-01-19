$(function() {
  var handleWeatherResponse = function(weather) {
    // "weather" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(weather);

    // We also set a window-level variable so we can use it in the console,
    // by typing "weather"
    window.weather = weather;

    // Put your code here. Don't change any other code in this file. You will be sad.
    var timestamp0 = weather.daily.data[0].time
    var a = new Date();
    var timestamp1 = weather.daily.data[1].time
    var b = new Date();
    var timestamp2 = weather.daily.data[2].time
    var c = new Date();
    a.setTime(timestamp0*1000)
    b.setTime(timestamp1*1000)
    c.setTime(timestamp2*1000)
    var weekday = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
    var markup = Math.round(weather.currently.temperature) + "° " + weather.currently.summary + "." + "<p> </p>" + weather.daily.summary
    + "<p> </p>" + weekday[a.getDay(timestamp0)] + ": " + Math.round(weather.daily.data[0].temperatureMin) + "° - " + Math.round(weather.daily.data[0].temperatureMax) + "° " + weather.daily.data[0].summary
    + "<p> </p>" + weekday[b.getDay(timestamp1)] + ": " + Math.round(weather.daily.data[1].temperatureMin) + "° - " + Math.round(weather.daily.data[1].temperatureMax) + "° " + weather.daily.data[1].summary
    + "<p> </p>" + weekday[c.getDay(timestamp2)] + ": " + Math.round(weather.daily.data[2].temperatureMin) + "° - " + Math.round(weather.daily.data[2].temperatureMax) + "° " + weather.daily.data[2].summary
    //weather.daily.data[0].icon
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML)
    // and write it out to the page.
    $('.weather-report').html(markup);
  }

  // The "glue" that makes it all work. Don't really worry about this for now.
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
