const puppeteer = require('puppeteer');
const prompt = require('prompt');



// Include prompt module.
// var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // The fist input text is assigned to username variable.
        name: 'username',
        
    }
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        console.log('start www.google.com/search?q=SEARCHTERM');

        // Get user input from result object.
        var username = result.username;
        var password = result.password;
        var email = result.email;
        var message = "  Username : " + username + " , Password : " + password + " , Email : " + email;

        // Display user input in console log.
        console.log(message);




(async() => {
    const browser = await puppeteer.launch({headless: false,args:[
        '--start-maximized' ]
    });

    const page = await browser.newPage();
    await page.setViewport({  width: 1366, height: 768});
    await page.goto("https://www.naukri.com/");
    await page.waitForSelector('input[class="suggestor-input "]');
    await page.type('input[class="suggestor-input "]', 'graphic designer');
    page.keyboard.press("Enter");
    // var name = window.prompt("Enter your name: ");
// prompt("Whichtype of job you want to search?");


})()
.catch(err => console.error(err))

    }
});