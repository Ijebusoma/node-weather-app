const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'db11d968bb76367****';
let city = argv.c || 'Lagos Nigeria'; //if city is supplied, use. Else, default is Lagos
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(url, function(err, response, body){
    err ? console.log('error:', error): displayWeather(body);
});
function displayWeather(body){
    let info = JSON.parse(body);
    let message  = console.log('There is going to be '+ info.weather[0].description + ' in '+ info.name);
}
