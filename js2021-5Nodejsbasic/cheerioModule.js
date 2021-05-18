// extract module
const request = require('request');
const cheerio = require('cheerio');

// use request module
const url = 'http://www.yes24.com/24/Category/BestSeller';
request(url, (error, response, body) => {

    // use cheerio module
    const $ = cheerio.load(body);

    // extract data
    $('.view_box').each((index, element) => {

        // declare a variable
        const title = $(element).find('.copy').text().trim();
        let writer = $(element).find('.book_writer').text().trim;
        writer = writer.split(',').map((item) => item.trim());

        // print
        console.log(title)
        console.log(writer);
        console.log();
    })

});