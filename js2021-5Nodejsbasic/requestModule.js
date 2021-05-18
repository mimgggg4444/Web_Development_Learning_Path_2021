const request = require('request')

const url = 'https://www.google.com/';
request(url, (error, response, body) => {
    console.log(body);
})