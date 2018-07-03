/**command line node application to get weather report**/
let apiKey = 'db1*************';
let city = 'London,UK';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

 const request = require('request');
request(url, function(err, response, body){
    err ? console.log('error:', error): displayWeather(body);
});
function displayWeather(body){
    let info = JSON.parse(body);
    let message  = console.log('There is going to be '+ info.weather[0].description + ' in '+ info.name);
}